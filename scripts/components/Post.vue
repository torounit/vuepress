<template>
  <div class="Post">
    <a :href="post.link" @click="goPost">{{ post.title.rendered }}</a>
  </div>
</template>
<script>

  import router from '../router'
  import {mapActions} from 'vuex'
  import {selectPost} from '../store/actions';
  import wp from '../utility/api'

  export default {
    name: 'Post',
    props: ['post'],
    asyncComputed: {},
    methods: {
      goPost(event) {
        event.preventDefault();
        let post = this.post;
        let link = new URL(post.link);
        router.push(link.pathname);
        this.$store.dispatch('selectPost', {post});

      }
    }
  }
</script>
