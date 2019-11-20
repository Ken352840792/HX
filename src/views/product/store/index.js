import Axios from '@/axios/axios'
import { getCommQuery } from '@/axios/comAjax'
// 获取用户
const actions = {
  // 查询产品信息接口
  queryProduct ({ commit, state }, params) {
    return Axios.post('DataScreenHandler.ashx', getCommQuery(
      'H5.QueryProductInfo', params
    )).then(res => {
      return res
    })
  },
  // 编辑资讯信息接口
  editProduct ({ commit, state }, params) {
    return Axios.post('DataScreenHandler.ashx', getCommQuery(
      'H5.EditProductInfo', params
    )).then(res => {
      return res
    })
  }
}

const getters = {
  // 对time成员进行过滤，变为格式化时间：名称(state对象参数){}
  // getTime (state) {
  //   var tm = new Date(state.time)
  //   // return tm.getFullYear() + '-' + (tm.getMonth() + 1) + '-' + tm.getDay()
  //   return `${tm.getFullYear()}-${tm.getMonth() + 1}-${tm.getDay()}`
  // }
}
// mutations：存放同步读取、修改state的的方法
// 改变状态的方法
const mutations = {
}

// 配置共享数据：
const state = {
  count: 2,
  time: new Date()
}
export default {
  actions,
  mutations,
  getters,
  state
}
