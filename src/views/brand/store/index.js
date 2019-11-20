import Axios from '@/axios/axios'
import { getCommQuery } from '@/axios/comAjax'
const actions = {
  // 查询品牌信息接口
  queryBrandInfo ({ commit, state }, params) {
    return Axios.post('DataScreenHandler.ashx', getCommQuery(
      'H5.QueryBrandInfo', params
    )).then(res => {
      return res
    })
  },
  // 编辑品牌信息接口
  editBrandInfo ({ commit, state }, params) {
    return Axios.post('DataScreenHandler.ashx', getCommQuery(
      'H5.EditBrandInfo', params
    )).then(res => {
      return res
    })
  }
}

const getters = {
  // 对time成员进行过滤，变为格式化时间：名称(state对象参数){}
}
// mutations：存放同步读取、修改state的的方法
// 改变状态的方法
const mutations = {
}

// 配置共享数据：
const state = {
}
export default {
  actions,
  mutations,
  getters,
  state
}
