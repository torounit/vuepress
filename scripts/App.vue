<template>
  <div class="App">
    <header class="App__header">
      <h1><router-link :to="{ path: '/'}">{{name}}</router-link></h1>
      <search></search>
    </header>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  import Search from "./components/Search.vue";

  export default {
    components: {Search},
    name: 'App',
    created () {
      let route = this.$store.state.route;
      this.$store.dispatch('fetchPosts', route );
    },
    watch: {
      '$route' (to, from) {
        this.$store.dispatch('fetchPosts', to );
      }
    },
    asyncComputed: {
      name: {
        async get () {
          let response = await fetch('/wp-json');
          let data = await response.json()
          return data.name;
        },
        default() {
          return ''
        }

      }
    },
  }
</script>
<style>

  html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  body {
    margin: 0;
  }

  .App__header {
    padding: 16px;
  }

</style>

