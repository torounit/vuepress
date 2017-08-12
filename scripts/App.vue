<template>
  <div class="App">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created () {
      let route = this.$store.state.route;
      this.$store.dispatch('fetchPosts', route );
    },
    watch: {
      '$route' (to, from) {
        this.$store.dispatch('fetchPosts', to );
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  //@import '~normalize.css/normalize.css';
  :root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

</style>

