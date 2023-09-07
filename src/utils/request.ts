import { useUserStore } from '@/stores/user'
import router from '@/router'
import axios from 'axios'
import { showToast } from 'vant'
// 1. 新axios实例，基础配置
const baseURL = '/dev-api'
const instance = axios.create({
  baseURL,
  timeout: 1000
})
// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${store.user?.token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)
// 3. 响应拦截器，剥离⽆效数据，401拦截
instance.interceptors.response.use(
  (res) => {
    // 后台约定，响应成功，但是code不是10000，是业务逻辑失败
    if (res.data?.code !== 10000) {
      showToast(res.data?.message)
      return Promise.reject(res.data)
    }
    // 业务逻辑成功，返回响应数据，作为axios成功的结果
    return res.data
  },
  (err) => {
    if (err.response.status === 401) {
      // 删除⽤户信息
      const store = useUserStore()
      store.delUser()
      // 跳转登录，带上接⼝失效所在⻚⾯的地址，登录完成后回跳使⽤
      router.push(`/login?returnUrl=${router.currentRoute.value.fullPath}`)
    }
    return Promise.reject(err)
  }
)
export { baseURL, instance }
