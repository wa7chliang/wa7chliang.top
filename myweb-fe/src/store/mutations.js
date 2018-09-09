import getters from './getters.js'

var state = {
  allCount: 0
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
