import Vue from 'vue'
import VueRouter from 'vue-router'
import BookLet from './modules/booklet'
import Practice from './modules/practice'
// import { getToken, setToken } from '@/util/index'
// import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  // 掘金小册的内容
  ...BookLet,
  // vue 实战
  ...Practice
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const token = getToken()
//   if (token) {
//     store.dispatch('authorization').then(res => {
//       if (to.name === 'login') next({ name: 'count-to' })
//       else next()
//     }).catch(() => {
//       console.log('here')
//       setToken('')
//       next({ name: 'login' })
//     })
//   } else {
//     if (to.name === 'login') next()
//     else next({ name: 'login' })
//   }
// })

export default router
