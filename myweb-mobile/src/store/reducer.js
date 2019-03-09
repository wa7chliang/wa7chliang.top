import {combineReducers} from 'redux'
import friendReducer from '../pages/friend/store/reducer'
import filedReducer from '../pages/filed/store/reducer'
export default combineReducers({
  friend: friendReducer,
  filed: filedReducer
})