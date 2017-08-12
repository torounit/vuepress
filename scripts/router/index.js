import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index.vue';
import Singular from '../pages/Singular.vue';
import config from '../utility/config'

Vue.use(VueRouter);
let datePath = config.date_permastruct
  .replace('%year%', ':year(\\d+)')
  .replace('%monthnum%', ':monthnum(\\d+)?')
  .replace('%day%', ':day(\\d+)?')
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
    path: datePath + '(/page)?/:id(\\d+)?',
    name: 'date',
    component: Index,
  },
  {
    path: '/**',
    name: 'singular',
    component: Singular,
  },
  {
    path: '*',
    name: 'preview',
    component: Singular,
  },
];

console.log(datePath);
const router = new VueRouter({ mode: 'history', routes });
export default router;
