import axios from 'axios'
import router from '../router'
import store from '../store'
const Axios = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/' : 'http://dashboardh5uat.zhengpin.so/H5Manager/',
  timeout: 5000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
// 配置请求拦截器：
let count = 0
Axios.interceptors.request.use(
  function (config) {
    count++
    store.commit('showLoading')

    if (localStorage.token) {
      config.headers.Authorization = localStorage.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
Axios.interceptors.response.use(
  response => {
    count--
    if (count <= 0) {
      store.commit('hideLoading')
    }
    // 判断请求失败（判断当状态码不等于200(获取、修改、删除)/201(添加)）
    if (response.status !== 200 && response.status !== 201) {
      return this.$message.error(response.data.meta.msg)
    }
    if (!response.data) {
      return response
    }
    if (response.data.IsSuccess) {
      return response.data.ResponseData.Result ? response.data.ResponseData.Result : response.data.ResponseData
    }
    return response
  },
  error => {
    store.commit('hideLoading')
    if (error.response.status === 403) {
      router.push({
        path: '/error/403'
      })
    }
    if (error.response.status === 500) {
      router.push({
        path: '/error/500'
      })
    }
    if (error.response.status === 502) {
      router.push({
        path: '/error/502'
      })
    }
    // if (error.response.status === 404) {
    //   router.push({
    //     path: '/error/404'
    //   })
    // }
    // if (error.response.status === 401) {
    //   router.push({
    //     path: '/login'
    //   })
    // }
    return Promise.reject(error.response)
  }
)

export default Axios
