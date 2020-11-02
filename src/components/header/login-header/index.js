import React, { memo } from 'react'
import { BASE_URL } from "@/api/config"
import './index.less'

export default memo(function LoginHeader(props) {
  return (
    <div id="login-header">
      <div className="logo">
        <img src={BASE_URL + props.loginInfo.sysImg} alt=""/>
      </div>
      <div className="title">
        <h3>{ props.loginInfo.headerTitle }</h3>
        <p>{ props.loginInfo.sysTitleEn }</p>
      </div>
    </div>
  )
})
