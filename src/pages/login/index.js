import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import cryptoJS from "crypto-js"
import { Form, Input, Button } from 'antd';
import { createFromIconfontCN, EnvironmentOutlined } from '@ant-design/icons';
import './login.less'

// 导入分离的组件
import LoginHeader from '@/components/header/login-header'

// 导入一些方法
import { getStateInfoData, getAddressData, getLoginData } from './store/actions'
import { randomWord } from "@/utils/login"
import { BASE_URL } from "@/api/config"

export default memo(function Login(props) {
  /**
   * 主要是state的数据
   */
  const [loginForm] = useState({
    username: "农有敏",
    password: "A123456.",
    uuid: ""
  });
  /**
   *  主要发送网络请求
   */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStateInfoData())
    dispatch(getAddressData())
    loginForm.uuid = randomWord() // 给uuid赋值
  }, [dispatch, loginForm])
  /**
   *  拿到redux相关联数据
   */
  const { loginInfo, address } = useSelector(state => ({
    loginInfo: state.getIn(['login', 'loginInfo']),
    address: state.getIn(['login', 'address'])
  }), shallowEqual)
  
  /**
   *  操作 + 操作发送请求
   */
  const handleLogin = () => {
    let reqLoginForm = JSON.parse(JSON.stringify(loginForm))
    let userId = cryptoJS.enc.Utf8.parse(loginForm.uuid);
    let username = cryptoJS.enc.Utf8.parse(reqLoginForm.username);
    let password = cryptoJS.enc.Utf8.parse(reqLoginForm.password);
    reqLoginForm.username = cryptoJS.AES.encrypt(username, userId, {
      mode: cryptoJS.mode.ECB,
      padding: cryptoJS.pad.Pkcs7,
    }).toString();
    reqLoginForm.password = cryptoJS.AES.encrypt(password, userId, {
      mode: cryptoJS.mode.ECB,
      padding: cryptoJS.pad.Pkcs7,
    }).toString();
    dispatch(getLoginData(reqLoginForm)).then(res => {
      if (res.data.message === '操作成功') {
        props.history.push('/module')
      }
    })
  }

  /**
   *  样式
   */
  const bgStyel = {
    backgroundImage: `url(${BASE_URL + loginInfo.bigImg})`
  };
  /**
   *  icon
   */
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_112760_v237lfc21m.js',
  });
  return (
    <div id="login" style={bgStyel}>
      <LoginHeader loginInfo={loginInfo} />
      <div className="wrap">
        <div className="login-icon"><img src={BASE_URL + loginInfo.sysImg} alt="" /></div>
        <h2 className="login-title">登录</h2>
        <Form className="form" onFinish={handleLogin}>
          <Form.Item>
            <Input name="username" value={loginForm.username} className="item-input" prefix={<MyIcon type='icon-zuzhiheyonghuguanli' />} />
          </Form.Item>
          <Form.Item>
            <Input.Password name="password" value={loginForm.password} className="item-input" prefix={<MyIcon type='icon-suotou' />} />
          </Form.Item>
          <Form.Item name="password" >
            <div className="address">
              <EnvironmentOutlined />
              <span className="name">{address}</span>
            </div>
          </Form.Item>
          <Form.Item >
            <Button className="login-btn" type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="login-footer">广州市会博通软件科技有限公司</div>
    </div>
  )
})
