<template>
  <PostCollection :posts="posts"></PostCollection>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PostCollection from '../components/PostCollection.vue'
  export default {
    name: 'Index',
    components: {
      PostCollection
    },
    computed: mapGetters(['posts'])
  }
</script>
