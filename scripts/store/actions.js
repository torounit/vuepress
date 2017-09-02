import * as types from './mutation-types';
import wp from '../utility/api'
import Period from '../utility/Period';
import getTypes from '../utility/getTypes';

wp.vpPost = wp.registerRoute('vuepress/v1', '/post/(?P<url>)');

export const fetchPosts = async ({commit}, route) => {
  let page = 1;
  if ( route.params.page ) {
    page = parseInt( route.params.page, 10 );
  }
  let loaders = {
    ['search']: async () => {
      return await wp.posts().search(route.params.search).page( page );
    },
    ['author']: async () => {
      let users = await wp.users().slug(route.params.author);
      let user = users[0];
      return await wp.posts().author(user.id).page( page );
    },
    ['category']: async () => {
      let terms = await wp.categories().slug(route.params.term);
      let term = terms[0];
      return await wp.posts().categories(term.id).page( page );
    },
    ['tag']: async () => {
      let terms = await wp.tags().slug(route.params.term);
      let term = terms[0];
      return await wp.posts().tags(term.id).page( page );
    },
    ['date']: async () => {
      let period = new Period();
      if( route.params.year ) {
        period.year = parseInt(route.params.year, 10);
      }
      if( route.params.monthnum ) {
        period.month = parseInt(route.params.monthnum, 10);
      }
      if (route.params.day) {
        period.day = parseInt(route.params.day, 10);
      }
      return await wp.posts()
        .after(period.firstDay())
        .before(period.lastDay())
        .page( page );
    },
    ['index']: async () => {
      return await wp.posts().page( page );
    },
    ['singular']: async () => {
      let post = await wp.vpPost().url(route.fullPath);
      let types = await getTypes();
      let rest_base = types[post.type].rest_base;
      if ( route.query.preview ) {
        let revisions = await wp[rest_base]().id( post.id ).revisions();
        return [revisions[0]]
      }
      return [post];
    }
  };

  if (route.name in loaders) {
    let posts = await loaders[route.name]();
    commit(types.FETCH_POSTS, {
      posts
    })
  }
  else {
    if (route.query.preview_id) {
      let posts = await wp.pages().id(route.query.preview_id);
      commit(types.FETCH_POSTS, {
        posts
      })
    }

  }


};

export const selectPost = ({commit}, post) => {
  commit(types.SELECT_POST, post)
};
