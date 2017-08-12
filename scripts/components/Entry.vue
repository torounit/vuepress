<template>
  <article class="Entry">
    <header>
      <h1 class="Entry__title">{{ post.title.rendered }}</h1>
      <div class="" v-for="categoryID in post.categories" :key="categoryID">
        <category-link :id="categoryID"></category-link>
      </div>
    </header>
    <div class="Entry__body" v-html=post.content.rendered @click="click"></div>
  </article>

</template>

<script>
  import router from '../router'
  import CategoryLink from './CategoryLink.vue';
  export default {
    name: 'Entry',
    components: {
      CategoryLink
    },
    props: {
      post: {
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        }
      }
    },
    methods: {
      click(event) {

        let target = event.path.find( (e,i) => e.localName === 'a' );
        let route = router.match( target.href );
        if( route ) {
          event.preventDefault();
          router.push(target.pathname)
        }
      }
    }
  }
</script>

<style scoped>
  .Entry {
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 1px #ccc;
  }

</style>
