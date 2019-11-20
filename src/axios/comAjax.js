import qs from 'qs'
export function getCommQuery (method, params) {
  var ff = qs.stringify({
    method: method, // 请求的方法名称
    BizParams: JSON.stringify(params) // 业务请求的参数
  })
  return ff
}
export var assetsPath = process.env.NODE_ENV !== 'development' ? 'http://adminuat.zhengpin.so/' : '/'
