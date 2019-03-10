import * as actionTypes from './actionTypes'

const defaultState = {
  list: [],
  loading: true,
  count: 0
}

export default (state = defaultState, action) => {
  let newState
  switch(action.type) {
    case actionTypes.SETLIST:
      newState = {...state}
      action.page === 1? newState.list = action.data: newState.list = [...newState.list, ...action.data]
      newState.loading = false
      return newState
    case actionTypes.SETCOUNT:
      newState = {...state}
      newState.count = action.count
      return newState
    case actionTypes.SETLOADING:
      newState = {...state}
      newState.loading = action.flag
      return newState
    default:
      return state
  }
}