import { Map } from 'immutable'// fromJS 深层转化

import * as actionTypes from './constants';

const defaultState = Map({
  loginInfo: {},
  address: '',
  token: ''
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_INFO:
      return state.set("loginInfo", action.loginInfo)
    case actionTypes.LOGIN_ADDRESS:
      return state.set("address", action.address)
    case actionTypes.LOGIN_TOKEN:
      return state.set("token", action.token)
    default:
      return state;
  }
}

export default reducer