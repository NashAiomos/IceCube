import type {Principal} from '@dfinity/principal';
import type {ActorMethod} from '@dfinity/agent';
import type {IDL} from '@dfinity/candid';

export interface CanisterStatusResponse {
  'status': CanisterStatusType,
  'memory_size': bigint,
  'cycles': bigint,
  'settings': DefiniteCanisterSettings,
  'query_stats': QueryStats,
  'idle_cycles_burned_per_day': bigint,
  'module_hash': [] | [Uint8Array | number[]],
  'reserved_cycles': bigint,
}

export type CanisterStatusType = { 'stopped': null } |
  { 'stopping': null } |
  { 'running': null };

export interface Comment {
  'content': string,
  'user': Principal,
  'created_at': bigint,
}

export interface DefiniteCanisterSettings {
  'freezing_threshold': bigint,
  'controllers': Array<Principal>,
  'reserved_cycles_limit': bigint,
  'wasm_memory_limit': bigint,
  'memory_allocation': bigint,
  'compute_allocation': bigint,
}

export interface Like {
  'user': Principal,
  'created_at': bigint
}

export interface Post {
  'repost': Array<Like>,
  'post_id': string,
  'photo_url': Array<string>,
  'content': string,
  'like': Array<Like>,
  'user': Principal,
  'created_at': bigint,
  'comment': Array<Comment>,
  'feed_canister': Principal,
  'index': bigint,
}

export interface QueryStats {
  'response_payload_bytes_total': bigint,
  'num_instructions_total': bigint,
  'num_calls_total': bigint,
  'request_payload_bytes_total': bigint,
}

export interface _SERVICE {
  'delete_feed': ActorMethod<[string], boolean>,
  'get_latest_feed': ActorMethod<[bigint], Array<Post>>,
  'get_post': ActorMethod<[string], [] | [Post]>,
  'get_post_number': ActorMethod<[], bigint>,
  'get_posts': ActorMethod<[Array<string>], Array<Post>>,
  'status': ActorMethod<[], CanisterStatusResponse>,
  'store_feed': ActorMethod<[Post], boolean>,
}

export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
