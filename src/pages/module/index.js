import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import './module.less'
// 导入分离的组件
import ModuleHeader from '@/components/header/module-header'
import GridAll from './components/grid-item'

// 导入一些方法
import { getState } from "@/utils/login"
import { BASE_URL } from "@/api/config"
import { getUserInfoData } from './store/actions'
export default memo(function Module() {
  /**
   * 主要是state的数据
   */
  const [loginInfo] = useState(JSON.parse(getState()));
  /**
   *  主要发送网络请求
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoData())
  }, [dispatch])

    /**
   *  拿到redux相关联数据
   */
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(['home', 'userInfo']),
  }), shallowEqual)
    /**
   *  样式
   */
  const bgStyel = {
    backgroundImage: `url(${BASE_URL + loginInfo.bigImg})`
  };
  return (
    <div className="home" style={bgStyel}>
      <ModuleHeader loginInfo={loginInfo} userInfo={userInfo} />
      <GridAll />
    </div>
  )
})
