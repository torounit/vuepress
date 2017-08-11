import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';
import plugins from './plugins';
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  getters,
  state,
  mutations,
  plugins,
  actions
});

export default store;
