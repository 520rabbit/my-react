import React, { memo, useState } from 'react'
// 导入分离的组件
import ModuleHeader from '@/components/header/module-header'

// 导入一些方法
import { getState } from "@/utils/login"
export default memo(function Module() {
  const [loginInfo] = useState(JSON.parse(getState()));
  return (
    <div>
      <ModuleHeader loginInfo={loginInfo} />
    </div>
  )
})
