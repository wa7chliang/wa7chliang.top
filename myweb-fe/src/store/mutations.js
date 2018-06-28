import getters from './getters.js'

var state = {
  isState: 0,
  allCount: 0
}

const mutations = {
  SET_ISSTATE_STATE (state, num) {
    state.isState = num
  },
  SET_ALLCOUNT_STATE (state, num) {
    state.allCount = num
  }
}

export default {
  state,
  getters,
  mutations
}
