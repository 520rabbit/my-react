import { combineReducers } from 'redux-immutable'

import { reducer as loginReducer } from '@/pages/login/store'
import { reducer as homeReducer } from '@/pages/module/store'
 
const cReducer = combineReducers({
  login: loginReducer,
  home: homeReducer
})

export default cReducer
