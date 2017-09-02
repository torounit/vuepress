<template>
  <form class="search" v-on:submit.prevent="onSubmit">
    <input type="search" placeholder="Search...." v-model="search">
  </form>
</template>

<script>
  import router from '../router'
  export default {
    name: 'search',
    computed: {
    },
    props: ['routeName','totalPages'],
    methods: {
      onSubmit() {
        router.push({ name: 'search', params: { search: this.search }})
      }
    }
  }
</script>

<style lang="css" scoped>
  input {
    display: block;
    width: 100%;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #464a4c;
    background-color: #fff;
    background-image: none;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;

  }
</style>
