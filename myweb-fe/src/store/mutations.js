import getters from './getters.js'

var state = {
  allCount: null // allCount为null 则分页器才有用 bug
}

const mutations = {
  SET_ALLCOUNT_STATE (state, num) {
    state.allCount = num
  }
}

export default {
  state,
  getters,
  mutations
}
