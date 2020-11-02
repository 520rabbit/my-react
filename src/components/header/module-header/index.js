import React, { memo } from 'react'
import './index.less'

// 导入分离的组件
import ModuleTool from '../module-tool'


// 导入一些方法
import { BASE_URL } from "@/api/config"
export default memo(function ModuleHeader(props) {
  return (
    <div id="module-header">
      <div className="login-header">
        <div className="logo">
          <img src={BASE_URL + props.loginInfo.sysImg} alt="" />
        </div>
        <div className="title">
          <h3>{props.loginInfo.headerTitle}</h3>
          <p>{props.loginInfo.sysTitleEn}</p>
        </div>
      </div>
      <div className="user">
        <div className="user-info">
          <div className="avatar">
            <img src={ BASE_URL + '/' + props.userInfo.userPicUrl } alt={ props.userInfo.userCName } />
          </div>
          <h3 className="hello">{props.userInfo.userCName} 你好！</h3>
        </div>
        <ModuleTool />
      </div>  
    </div>
  )
})
