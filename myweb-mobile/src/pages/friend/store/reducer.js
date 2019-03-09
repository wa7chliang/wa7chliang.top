import * as actionTypes from './actionTypes'

const defaultState = {
  friendList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SETFRIENDLIST:
      let newState = {...state}
      newState.friendList = action.data
      return newState
    default:
      return state
  }
}