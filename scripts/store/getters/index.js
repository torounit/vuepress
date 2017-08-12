export const post = state => {
  let post = state.posts[0];
  if(post) {
    return post
  }

  return {
    id: 0,
    title: {
      rendered: ''
    },
    content:{
      rendered: '',
    }
  }
};

export const posts = state => {
  return state.posts
};
