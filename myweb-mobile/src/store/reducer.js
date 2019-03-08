import {combineReducers} from 'redux'
import friendReducer from '../pages/friend/store/reducer'
export default combineReducers({
  friend: friendReducer
})