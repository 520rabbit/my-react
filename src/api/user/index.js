import ajax from '../index'

// 1.静态资源
export const getSateData = () => {
  return ajax({
    url: '/getStaticInfo',
    method: 'get',
  })
}

// 2.地址
export const getIpAddress = () => {
  return ajax({
    url: '/ipAddress',
    method: 'get',
  })
}

// 登录
export const handleLogin = (data) => {
  return ajax({
    url: '/login',
    method: 'post',
    data
  })
}