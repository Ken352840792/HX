import Vue from 'vue'
import Vuex from 'vuex'
import brand from '../views/brand/store'
import info from '../views/info/store'
import product from '../views/product/store'
Vue.use(Vuex)
var store = new Vuex.Store({
  modules: {
    brand,
    info,
    product
  },
  state: {
    loading: false,
    alertOption: {
      title: '',
      msg: '',
      buttons: []
    },
    alertState: false
  },
  mutations: {
    showAlert (state, option) {
      state.alertState = true
      Object.assign(state.alertOption, option)
    },
    hideAlert (state) {
      state.alertState = false
    },
    showLoading (state) {
      state.loading = true
    },
    hideLoading (state) {
      state.loading = false
    }
  }
})
export default store
