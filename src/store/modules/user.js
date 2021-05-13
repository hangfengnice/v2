import axios from 'axios'
import { setToken, getToken } from '@/util/index'

export default {
  state: {
    userName: 'hangfeng'
  },
  actions: {
    login ({ commit }, data) {
      console.log(data, 'data')
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: '/index/login',
          data
        }).then(res => {
          const { data: { token }, code } = res.data
          if (code === 200) {
            setToken(token)
            console.log(code, 'code')
            resolve()
          } else {
            reject(new Error('error'))
          }
        }).catch(error => {
          reject(new Error(error))
        })
      })
    },
    authorization ({ commit }) {
      return new Promise((resolve, reject) => {
        return axios.get('/users/authorization', {
          headers: {
            Authorization: getToken()
          }
        }).then(res => {
          const { data: { token }, code } = res.data
          if (code === 200) {
            setToken(token)
            resolve()
          } else {
            reject(new Error('error'))
          }
        }).catch(error => reject(error))
      })
    }
  }
}
