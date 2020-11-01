import axios from 'axios'
import { BASE_URL, TIMEOUT } from "./config"
import { getToken } from "@/utils/login"

const service = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: TIMEOUT
})

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use( 
  response => {
    const res = response
    if (res.data.code === '407') {
      // router.push('/login')
      return Promise.reject(res)
    }  
    return res
  }
)

export default service