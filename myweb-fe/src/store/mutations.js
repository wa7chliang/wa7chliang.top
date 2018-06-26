import getters from './getters.js'

var state = {
  isState: 0
}

const mutations = {
  SET_ISSTATE_STATE (state, num) {
    state.isState = num
  }
}

export default {
  state,
  getters,
  mutations
}
