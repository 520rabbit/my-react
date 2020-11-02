import React, { memo, useState } from 'react'
import { createFromIconfontCN } from '@ant-design/icons';
import './index.less'
export default memo(function MduleTool() {

  const [isActive, setActive] = useState(false);

  /**
   *  icon
   */
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1797063_h7r3yjj225.js',
  });
  return (
    <div id="all-lists">
      <div className="item"> <MyIcon type='icon-sousuo' /> </div>
      <div className="item"> <MyIcon type='icon-youju' /> </div>
      <div className="item"> <MyIcon type='icon-zixun' /> </div>
      <div className="item"> <MyIcon type='icon-jiaoliu1' /> </div>
      <div className="item"> <MyIcon type='icon-icon-test' /> </div>
      <div className="item" onMouseEnter={e => setActive(true)} onMouseLeave={e => setActive(false)}>
        <span className={['normal ', isActive ? 'active' : ''].join('')}><MyIcon type='icon-shezhi' /></span>
        <MyIcon type='icon-dakai' />
      </div>


      <div className="set-lists">
        <div className="magnet-list">
          <div className="set-item"><MyIcon type='icon-dakai' />磁贴显示设置</div>
          <div className="set-item"><MyIcon type='icon-dakai' />恢复默认磁铁首页</div>
          <div className="set-item"><MyIcon type='icon-dakai' />保存为默认磁碟首页</div>
        </div>

        <div className="theme-lists">
          <div className="theme-item"> 
            <span style={{ backgroundColor: 'red', display: 'inline-block', width: '15px', height: '15px', marginRight: '8px' }}></span>   
            磁贴显示设置
          </div>
          <div className="theme-item"> <span></span>  恢复默认磁铁首页</div>
          <div className="theme-item">  <span></span> 保存为默认磁碟首页</div>
        </div>



      </div>
    </div>
  )
})
