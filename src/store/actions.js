import { updateMsgNum } from '@/api/app'

const actions = {
  editMsgNum ({ commit }) {
    updateMsgNum().then(res => {
      commit('SET_MSG_NUM', res.info.msg_num)
    }).catch(err => {
      console.log(err)
    })
  }
}
export default actions
