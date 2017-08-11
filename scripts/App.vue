<template>
  <div class="App">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created () {
      this.$store.dispatch('fetchPosts');
      if ( location.pathname !== "/" || location.search ) {
        this.$store.dispatch('fetchPost',  location.pathname + location.search );
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  //@import '~normalize.css/normalize.css';
  :root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color: #EEE;
  }

</style>

