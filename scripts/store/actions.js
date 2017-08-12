import * as types from './mutation-types';
import wp from '../utility/api'

wp.vpPost = wp.registerRoute('vuepress/v1', '/post/(?P<url>)');

class Period {

  constructor() {
    this._year = null;
    this._month = null;
    this._day = null
  }


  set year(value) {
    this._year = value;
  }

  set month(value) {
    this._month = value;
  }

  set day(value) {
    this._day = value;
  }

  firstDay() {
    if (this._year === null) {
      return null;
    }

    if(this._month === null) {
      return new Date(this._year, 0, 1, 0, 0);
    }

    if(this._day === null) {
      return new Date(this._year, this._month - 1, 1, 0, 0);
    }

    return new Date(this._year, this._month - 1, this._day, 0, 0);

  }
  lastDay(){
    if (this._year === null) {
      return null;
    }

    if(this._month === null) {
      return new Date(this._year + 1, 0, 0, 0, 0);
    }

    if(this._day === null) {
      return new Date(this._year, this._month, 0, 0, 0);
    }

    return new Date(this._year, this._month - 1, this._day + 1, 0, 0);

  }
}

export const fetchPosts = async ({commit}, route) => {

  let loaders = {
    ['category']: async () => {
      let terms = await wp.categories().slug(route.params.term);
      let term = terms[0];
      return await wp.posts().categories(term.id);
    },
    ['tag']: async () => {
      let terms = await wp.tags().slug(route.params.term);
      let term = terms[0];
      return await wp.posts().tags(term.id);
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
        .before(period.lastDay());
    },
    ['index']: async () => {
      return await wp.posts();
    },
    ['singular']: async () => {
      let post = await wp.vpPost().url(route.fullPath);
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
