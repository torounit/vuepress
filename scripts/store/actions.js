import * as types from './mutation-types';
import wp from '../api'
wp.vppost = wp.registerRoute('vuepress/v1', '/post/(?P<url>)');

export const fetchPosts = async ({commit, state}) => {
  let posts = await wp.posts();
  commit(types.FETCH_POSTS, {
    posts
  })
}

export const fetchPost = async ({commit}, url) => {
  let post = await wp.vppost().url(url);
  commit(types.FETCH_POST, {post})
};

export const selectPost = ({commit}, post) => {
  commit(types.SELECT_POST, post)
};
