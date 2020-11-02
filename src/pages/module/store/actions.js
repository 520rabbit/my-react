import * as actionTypes from './constants';
import { setInfo } from '@/utils/login'

// 网络请求
import { getUserInfo } from '@/api/user'
/**
 * 操作保存的方法
 */
// 保存用户信息
export const getUserInfoAction = (res) => ({
  type: actionTypes.USER_INFO,
  userInfo: res.data.data
})

/**
 * 网络请求方法
 * */
// 静态资源
export const getUserInfoData = () => {
  return async (dispatch) => {
    let res  = await getUserInfo()
    setInfo(JSON.stringify(res.data.data))
    dispatch(getUserInfoAction(res))
  }
}

