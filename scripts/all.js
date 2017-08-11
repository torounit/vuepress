import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import store from './store'
import router from './router'

sync(store, router);

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});


