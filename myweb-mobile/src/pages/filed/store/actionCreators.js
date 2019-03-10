import * as actionTypes from './actionTypes'
import {get} from '../../../assets/js/util'
import {api} from '../../../assets/js/api'

const changelist = (data, page) => ({
  type: actionTypes.SETLIST,
  data,
  page
})

const changeCount = (count) => ({
  type: actionTypes.SETCOUNT,
  count
})

export const setLoading = (flag) => ({
  type: actionTypes.SETLOADING,
  flag
})

export function getCount() {
  return async (dispatch) => {
    const res = await get(api.getCount)
    if (res.state) {
      dispatch(changeCount(res.count))
    }
  }
}

export function getlist(page, size) {
  return async (dispatch) => {
    const res = await get(api.getListAll, {page, size})
    if (res.state) {
      dispatch(changelist(res.list, page))
    } else {
      console.log(res)
    }
  }
}