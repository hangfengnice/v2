import Vue from 'vue'
import VueRouter from 'vue-router'
import BookLet from './modules/booklet'
import Practice from './modules/practice'

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

const hasLogin = true

router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (hasLogin) next()
    else next({ name: 'login' })
  } else {
    if (hasLogin) next({ name: 'menu-page' })
    else next()
  }
})

export default router
