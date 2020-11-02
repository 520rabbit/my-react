import { Map } from 'immutable'// fromJS 深层转化

import * as actionTypes from './constants';

const defaultState = Map({
  userInfo: {}
})


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.USER_INFO:
      return state.set("userInfo", action.userInfo)
    default:
      return state;
  }
}

export default reducer