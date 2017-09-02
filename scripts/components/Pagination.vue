<template>
  <ol class="pagination">
    <li v-for="n in totalPages">
      <router-link :to="{ name: currentRouteName, params: { paging: 'page', page: n }}">{{ n }}</router-link>
    </li>
  </ol>
</template>

<script>

  export default {
    name: 'Pagination',
    computed: {
      currentRouteName() {
        console.log(this.$route);
        return this.$route.name;
      }
    },
    props: ['routeName','totalPages'],
    methods: {}
  }
</script>

<style lang="css" scoped>
  ol {
    justify-content: center;
    display: flex;
    width: 100%;
    padding: 0;

    margin: 1em auto;
  }

  li {
    display: block;
    padding: 0.5em;
  }
</style>
