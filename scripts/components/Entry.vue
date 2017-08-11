<template>
  <article class="Entry">
    <h1 class="Entry__title">{{ post.title.rendered }}</h1>
    <div v-html=post.content.rendered></div>
  </article>

</template>

<script>
  export default {
    name: 'Entry',
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
    box-sizing border-box;
    box-shadow 0 1px 1px #ccc
  }

</style>
