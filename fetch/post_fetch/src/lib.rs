use std::cell::{Cell, Ref, RefCell};
use std::collections::HashMap;
use std::vec;
use candid::{CandidType, Deserialize, Encode, Principal};
use ic_cdk_timers::TimerId;
use ic_cdk::api::management_canister::main::{CanisterStatusResponse, CanisterIdRecord};
use std::time::Duration;

thread_local! {
    // user_feed_canister -> post_id_array
    static NOTIFY_MAP: RefCell<HashMap<Principal, Vec<String>>> = RefCell::new(HashMap::new());
    static LOG_MAP: RefCell<HashMap<Principal, Vec<(String, String)>>> = RefCell::new(HashMap::new());
    static TIMER_ID: RefCell<TimerId> = RefCell::new(TimerId::default());
    static ROOT_FEED_ACTOR: RefCell<Principal> = RefCell::new(Principal::anonymous());
}

#[derive(CandidType, Deserialize, Debug, Clone)]
pub struct InitArg {
    root_feed: Principal
}

#[ic_cdk::init]
fn init(arg: InitArg) {
    // Init
    ROOT_FEED_ACTOR.set(arg.root_feed);

    // start timer
    let timer_id = ic_cdk_timers::set_timer_interval(
        Duration::from_secs(10), 
        || ic_cdk::spawn(notify())
    );
    TIMER_ID.set(timer_id);
}


#[ic_cdk::update]
fn receive_notify(to: Vec<Principal>, post_id: String) {
    for feed_canister in to.iter() {
        let is_feed_canister_have_post_id_array = 
            NOTIFY_MAP.with(|map| {
                map.borrow().get(feed_canister).cloned()
            });
        
        match is_feed_canister_have_post_id_array {
            None => {
                NOTIFY_MAP.with(|map| {
                    map.borrow_mut().insert(*feed_canister, vec![post_id.clone()]);
                })
            },
            Some(post_id_array) => {
                let mut new_post_id_array = post_id_array.clone();
                new_post_id_array.push(post_id.clone());
                NOTIFY_MAP.with(|map| {
                    map.borrow_mut().insert(*feed_canister, new_post_id_array);
                })
            }
        }
    }
}

#[ic_cdk::query]
fn get_notify_map_entries() -> Vec<(Principal, Vec<String>)> {
    NOTIFY_MAP.with(|map| {
        let mut result: Vec<(Principal, Vec<String>)> = vec![];
        for (user, post_id_array) in map.borrow().iter() {
            result.push((*user, post_id_array.clone()));
        };
        result
    })
}

#[ic_cdk::update]
async fn status() -> CanisterStatusResponse {
    ic_cdk::api::management_canister::main::canister_status(CanisterIdRecord {
        canister_id: ic_cdk::api::id()
    }).await.unwrap().0
}

async fn notify() {
    let entries: Vec<(Principal, Vec<String>)> = NOTIFY_MAP.with(|map| {
        let mut entries: Vec<(Principal, Vec<String>)> = Vec::new();
        for (user, post_id_array) in map.borrow().iter() {
            entries.push((user.clone(), post_id_array.clone()));
        };
        entries
    });

    for (user, post_id_array) in entries {
        // 查询 user -> feed_canister
        let user_feed_canister = ic_cdk::call::<(Principal, ), (Option<Principal>, )>(
            ROOT_FEED_ACTOR.with(|actor| actor.borrow().clone()), 
            "get_user_feed_canister", 
            (user.clone(), )
        ).await.unwrap().0;
        if user_feed_canister.is_none() {
            // 用户还未注册 feed_canister
            NOTIFY_MAP.with(|map| {
                map.borrow_mut().remove(&user)
            });
            continue;
        }
        
        // notify
        let notify_result = ic_cdk::call::<(Vec<String>, ), ()>(
            user_feed_canister.unwrap(), 
            "batch_receive_feed", 
            (post_id_array.clone(), )
        ).await.unwrap();
        
        // delete
        let mut map_post_id_vec = NOTIFY_MAP.with(|map| {
            map.borrow().get(&user).unwrap().clone()
        });

        map_post_id_vec.retain(|x| !post_id_array.contains(x));

        if map_post_id_vec.len() == 0 {
            NOTIFY_MAP.with(|map| {
                map.borrow_mut().remove(&user)
            });
        } else {
            NOTIFY_MAP.with(|map| {
                map.borrow_mut().insert(user, map_post_id_vec)
            });
        }

    }
}

ic_cdk::export_candid!();