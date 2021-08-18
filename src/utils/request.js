/**
 * axios
 */
import axios from 'axios'
import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth';
const service = axios.create({
  baseURL:""
})
// 在发送网络请求前进行那些拦截操作
service.interceptors.request.use(
  config => {
    console.log('config',config)
    if(config.type === 'form'){
      let data = config.data || {}
      let formData = new FormData()
      for(let i in data){
        formData.append(i,data[i])
      }
      config.data = formData
      // config.headers['Authorization'] = store.state.token ? store.state.token : Authorization;
      config.headers['Content-Type'] = 'application/json';
  }
    // config.headers.token = store.state.token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


// 发送请求后网页的响应
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    if (!error.response) {
      if (error.message.includes('timeout')) {
        this.$message.error('请求超时');
      }
    } else {
      switch (error.response.status) {
        case 400: error.message = '请求错误'; break
        case 401: error.message = '未授权，请登录'; break
        case 403: error.message = '拒绝访问';break
        case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
        case 408: error.message = '请求超时'; break
        case 500: error.message = '服务器内部错误'; break
        case 501: error.message = '服务未实现'; break
        case 502: error.message = '网关错误'; break
        case 503: error.message = '服务不可用'; break
        case 504: error.message = '网关超时'; break
        case 505: error.message = 'HTTP版本不受支持'; break
        default:
      }
      Message.error(error.message || '未知错误,请联系管理员');
    }
    return Promise.reject(error)
  }
)

export default service
