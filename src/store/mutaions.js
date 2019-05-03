const mutations = {
  // 修改网站名称
  SET_SITE_TITLE (state, params) {
    state.site_name = params
  },
  SET_VERSION (state, params) {
    state.version = params
  },
  SET_MSG_NUM (state, params) {
    state.msg_num = params
  }
}
export default mutations
