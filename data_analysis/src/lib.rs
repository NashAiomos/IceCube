use types::Post;

use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{DefaultMemoryImpl, StableBTreeMap, StableCell};
use ic_stable_structures::storable::{Bound, Storable};
use candid::{CandidType, Decode, Encode, Principal};
use serde::Deserialize;

use std::cell::RefCell;
use std::borrow::{Borrow, Cow};

type Memory = VirtualMemory<DefaultMemoryImpl>;

#[derive(CandidType, Deserialize, Debug, Clone)]
struct PostIdVec(Vec<String>);

impl PostIdVec {
    fn push(&self, post_id: String) -> Self {
        let mut vec = self.0.clone();
        let mut flag = false;
        for val in vec.iter() {
            if val == &post_id {
                flag = true;
                break;
            }
        };
        if !flag {
            vec.push(post_id);
        }
        PostIdVec(vec)
    }
}

impl Storable for PostIdVec {
    const BOUND: Bound = Bound::Unbounded;

    fn to_bytes(&self) -> std::borrow::Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: std::borrow::Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }
}

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static TOPIC_MAP: RefCell<StableBTreeMap<String, PostIdVec, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(0))),
        )
    );

    static POST_ACTOR: RefCell<StableCell<Principal, Memory>> = RefCell::new(
        StableCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))), 
            Principal::anonymous()
        ).unwrap()  
    );
}

#[ic_cdk::init]
fn init(post_actor: Principal) {
    POST_ACTOR.with(|actor| actor.borrow_mut().set(post_actor).unwrap());
}

#[ic_cdk::update]
fn receive_post(topic_vec: Vec<String>, post_id: String) -> bool {
    TOPIC_MAP.with(|map| {
        for topic in topic_vec {
            match map.borrow().get(&topic) {
                None => {
                    let post_id_vec = PostIdVec(vec![post_id.clone()]);
                    map.borrow_mut().insert(topic, post_id_vec);
                },
                Some(post_id_vec) => {
                    map.borrow_mut().insert(topic, post_id_vec.push(post_id.clone()));
                }
            }
        }
    });

    true
}

#[ic_cdk::query]
fn get_hot_topic(n: u64) -> Vec<(String, u64)> {
    let mut topic_vec: Vec<(String, u64)> = TOPIC_MAP.with(|map| {
        let mut vec: Vec<(String, u64)> = Vec::new();
        for (topic, post_id_vec) in map.borrow().iter() {
            vec.push((topic, post_id_vec.0.len() as u64));
        };
        vec
    });

    topic_vec.sort_by(|a, b| {
        a.1.partial_cmp(&b.1).unwrap()
    });

    let mut n_top_vec: Vec<(String, u64)> = Vec::new();
    let mut i = 0;
    for topic in topic_vec.iter().rev() {
        i += 1;
        if i > n {
            break;
        }

        n_top_vec.push(topic.clone());
    }

    n_top_vec
}

#[ic_cdk::query]
fn get_topic_number(topic: String) -> u64 {
    TOPIC_MAP.with(|map| {
        match map.borrow().get(&topic) {
            None => 0,
            Some(post_id_vec) => post_id_vec.0.len() as u64
        }
    })
}

#[ic_cdk::query(composite = true)]
async fn get_topic_post(topic: String, start: u64, len: u64) -> Vec<Post> {
    let post_id_vec = TOPIC_MAP.with(|map| {
        match map.borrow().get(&topic) {
            None => Vec::new(),
            Some(post_id_vec) => post_id_vec.0.clone()
        }
    });

    let posts = ic_cdk::call::<(Vec<String>, ), (Vec<Post>, )>(
        POST_ACTOR.with(|actor| actor.borrow().get().clone()), 
        "batch_get_post", 
        (post_id_vec,)
    ).await.unwrap().0;

    posts
}

ic_cdk::export_candid!();