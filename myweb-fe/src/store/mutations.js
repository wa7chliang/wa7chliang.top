import getters from './getters.js'

var state = {
  isLogin: false,
  isState: false
}

const mutations = {
  SET_ISLOGIN_STATE (state, flag) {
    state.isLogin = flag
  },
  SET_ISSTATE_STATE (state, flag) {
    state.isState = flag
  }
}

export default {
  state,
  getters,
  mutations
}
