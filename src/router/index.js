import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inject',
    component: () => import('@/views/inject.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('@/views/checkbox.vue')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('@/views/radio.vue')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import('@/views/display.vue')
  },
  {
    path: '/table-render',
    name: 'table-render',
    component: () => import('@/views/table-render.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
