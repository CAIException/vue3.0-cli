import axios from './index'

export const login = ({ account }) => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: {
      account
    }
  })
}
