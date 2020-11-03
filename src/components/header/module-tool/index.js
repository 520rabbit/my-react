import React, { memo, useState } from 'react'
import { createFromIconfontCN, DownOutlined } from '@ant-design/icons'
import './index.less'
export default memo(function MduleTool() {
  const [isActive, setActive] = useState(false)

  /**
   *  icon
   */
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_112760_dpy6a5fqeq7.js',
  })
  return (
    <div id="all-lists">
      <div className="item">
        <MyIcon type="icon-sousuo" />
      </div>
      <div className="item">
        <MyIcon type="icon-youju" />
      </div>
      <div className="item">
        <MyIcon type="icon-zixun" />
      </div>
      <div className="item">
        <MyIcon type="icon-jiaoliu1" />
      </div>
      <div className="item">
        <MyIcon type="icon-icon-test" />
      </div>
      <div
        className="item"
        onMouseEnter={(e) => setActive(true)}
        onMouseLeave={(e) => setActive(false)}
      >
        <span className={['normal ', isActive ? 'active' : ''].join('')}>
          <MyIcon type="icon-shezhi" />
        </span>
        <DownOutlined />
      </div>
      <div className={['set-lists ', isActive ? 'active' : ''].join('')} onMouseEnter={(e) => setActive(true)} onMouseLeave={(e) => setActive(false)}>
        <div className="magnet-list">
          <div className="set-item">
            <MyIcon type="icon-mokuaishezhi" />
            磁贴显示设置
          </div>
          <div className="set-item">
            <MyIcon type="icon-piliangshenqing" />
            恢复默认磁铁首页
          </div>
          <div className="set-item">
            <MyIcon type="icon-zhuticibiao" />
            保存为默认磁碟首页
          </div>
        </div>
        <div className="theme-lists">
          <div className="theme-item">
            <span style={{ backgroundColor: '#879193' }}></span>
            洁净
          </div>
          <div className="theme-item">
            <span style={{ backgroundColor: '#903' }}></span>
            古典
          </div>
          <div className="theme-item">
            <span style={{ backgroundColor: '#069' }}></span>
            简单
          </div>
          <div className="theme-item">
            <span style={{ backgroundColor: '#969' }}></span>
            浪漫
          </div>
          <div className="theme-item">
            <span style={{ backgroundColor: '#063' }}></span>
            自然
          </div>
          <div className="theme-item">
            <span style={{ backgroundColor: '#063' }}></span>
            稳重
          </div>
        </div>
        <div className="login-headle">
          <div className="set-item">
            <MyIcon type="icon-mokuaishezhi" />
            重新登录
          </div>
          <div className="set-item">
            <MyIcon type="icon-mokuaishezhi" />
            关闭系统
          </div>
        </div>
        <div className="theme-lists">
          <div className="theme-item">
            帮助
          </div>
          <div className="theme-item">
            关于
          </div>
        </div>
      </div>
    </div>
  )
})
