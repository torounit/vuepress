<template>
  <Entry :post="post"></Entry>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Entry from '../components/Entry.vue'
  export default {
    name: 'Singular',
    components: {
      Entry
    },
    computed: mapGetters(['post'])
  }
</script>

