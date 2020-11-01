import * as actionTypes from './constants';
import { setState, setToken, getToken } from '@/utils/login'

// 网络请求
import { getSateData, getIpAddress, handleLogin } from '@/api/user'
/**
 * 操作保存的方法
 */
// 保存静态资源
export const getStateInfoAction = (res) => ({
  type: actionTypes.LOGIN_INFO,
  loginInfo: res.data.data
})

// 地址
export const getAddressAction = (res) => ({
  type: actionTypes.LOGIN_ADDRESS,
  address: res.data.data.address
})

 // 登录信息
 export const getLoginAction = token => ({
  type: actionTypes.LOGIN_TOKEN,
  token: token
 })

/**
 * 网络请求方法
 * */
// 静态资源
export const getStateInfoData = () => {
  return async (dispatch) => {
    let res  = await getSateData()
    setState(JSON.stringify(res.data.data))
    dispatch(getStateInfoAction(res))
  }
}

// 地址
export const getAddressData = () => {
  return async (dispatch) => {
    let res  = await getIpAddress()
    dispatch(getAddressAction(res))
  }
}

// 登录操作
export const getLoginData = (reqLoginForm) => {
  return async (dispatch) => {
    let res = await handleLogin(reqLoginForm)
    setToken(res.data.data.token)
    dispatch(getLoginAction(getToken()))
    dispatch(getAddressAction(res))
    return res
  }
    // return (dispatch) => {
  //   return new Promise((resolve) => {
  //     handleLogin(reqLoginForm).then( res => {
  //       setToken(res.data.data.token)
  //       dispatch(getLoginAction(getToken()))
  //       resolve(res)
  //     })
  //   })
  // }
}