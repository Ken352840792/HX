import Vue from 'vue'
import VueRouter from 'vue-router'
import brand from '@/views/brand/view/index'
import info from '@/views/info/view/index'
import product from '@/views/product/view/index'
import demo from '@/views/demo/view/demo'
Vue.use(VueRouter)
const routes = [
  {
    path: '/brand',
    name: 'brand',
    component: brand
  },
  {
    path: '/newsinfo',
    name: 'info',
    component: info
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/demo',
    name: 'demo',
    component: demo
  }
]
const router = new VueRouter({
  routes
})
export default router
