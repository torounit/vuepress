import * as types from './mutation-types';

export default {
  [types.FETCH_POSTS](state, {posts}) {
    state.posts = posts;
  },
  [types.FETCH_POST](state, {post}) {
    state.post = post;
  },
  [types.FETCH_CATEGORIES](state, {categories}) {
    state.categories = categories;
  },
  [types.SELECT_POST](state, {post}) {
    state.post = post
  },
  [types.ROUTE_CHANGED](state, route) {

  }
}
