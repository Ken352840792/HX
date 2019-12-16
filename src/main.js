// 业务公用
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/axios'
import bootstrap from 'bootstrap-vue'
// 滑动组件
import { HappyScroll } from 'vue-happy-scroll'
// 滑动组件
import awesomeSwiper from 'vue-awesome-swiper'
// 拖拽组件
import dnd from 'awe-dnd'
// 验证组件
import Vuelidate from 'vuelidate'

// 引入相关CSS
import './assets/css/base.css'
import './assets/css/public.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'swiper/dist/css/swiper.css'
import 'vue-happy-scroll/docs/happy-scroll.css'
if (process.env.NODE_ENV === 'development') require('./mock/index.js')
Vue.use(axios)
Vue.use(awesomeSwiper)
Vue.use(bootstrap)
Vue.use(dnd)
Vue.use(Vuelidate)
Vue.component('happy-scroll', HappyScroll)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
