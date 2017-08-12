<template>
  <router-link v-if="category" :to="{ name: 'category', params: { term: category }}">{{category}}</router-link>
</template>

<script>
  import {mapActions} from 'vuex'
  import {selectPost} from '../store/actions';
  import wp from '../utility/api'

  export default {
    name: 'CategoryLink',
    components: {},
    props: ['id'],
    asyncComputed: {
      category: {
        async get () {
          let category = await wp.categories().id(this.id);
          return category.slug;
        },
        default() {
          return ''
        }

      }
    },
    methods: {}
  }
</script>
