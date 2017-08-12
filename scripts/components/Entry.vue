<template>
  <article class="Entry">
    <header>
      <h1 class="Entry__title">{{ post.title.rendered }}</h1>
      <div class="" v-for="categoryID in post.categories" :key="categoryID">
        <category-link :id="categoryID"></category-link>
      </div>
    </header>
    <div v-html=post.content.rendered></div>
  </article>

</template>

<script>
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
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .Entry {
    padding 16px;
    width 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 1px #ccc;
  }

</style>
