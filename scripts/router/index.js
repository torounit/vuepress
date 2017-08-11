import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue';
import Singular from '../pages/Singular.vue';
import config from '../config'

Vue.use(VueRouter);
const routes = [
  {
    path: '/(page/:id\\d+)?',
    name: 'index',
    component: Index,
    //component: config.page_on_front ? Singular : Index
  },
  {
    path: '/' + config.category_base + '/:term/(page/:id\\d+)?',
    name: 'category',
    component: Index,
  },
  {
    path: '/' + config.tag_base + '/:term/(page/:id\\d+)?',
    name: 'tag',
    component: Index,
  },
  {
    path: '/**',
    name: 'singular',
    component: Singular,
  },
];

const router = new VueRouter({ mode: 'history', routes });
export default router;
