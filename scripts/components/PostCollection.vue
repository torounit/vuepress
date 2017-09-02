<template>
  <div>
    <div class="Posts">
      <div class="Posts__item" v-for="post in posts" :key="post.id">
        <Post :post="post"></Post>
      </div>
    </div>
    <pagination :totalPages="totalPages"></pagination>
  </div>
</template>

<script>

  import router from '../router'
  import { mapActions } from 'vuex'
  import Post from './Post.vue'
  import Pagination from './Pagination.vue';
  import {selectPost} from '../store/actions';

  export default {
    name: 'PostCollection',
    components: {
      Post,
      Pagination
    },
    computed: {
      totalPages() {
        if ( this.posts._paging && this.posts._paging.totalPages ) {
          return parseInt( this.posts._paging.totalPages, 10 );
        }
        return 0;

      }
    },
    props: ['posts'],
    methods: {}
  }
</script>

<style scoped>
  .Posts__item {
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 1px #ccc;
    display: flex;
  }
</style>
