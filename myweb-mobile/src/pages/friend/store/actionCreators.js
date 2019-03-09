import * as actionTypes from './actionTypes'
import {get} from '../../../assets/js/util'
import {api} from '../../../assets/js/api'

const changeFriendList = (data) => ({
  type: actionTypes.SETFRIENDLIST,
  data
})

export function getFriendList() {
  return async (dispatch) => {
    const res = await get(api.getFriendList)
    if (res.state) {
      dispatch(changeFriendList(res.list))
    } else {
      console.log(res)
    }
  }
}