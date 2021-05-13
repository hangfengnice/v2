export default [
  {
    path: '/count-to',
    name: 'count-to',
    component: () => import('@/views/practice/count-to.vue')
  },
  {
    path: '/split-pane',
    name: 'split-pane',
    component: () => import('@/views/practice/split-pane.vue')
  },
  {
    path: '/render-page',
    name: 'render-page',
    component: () => import('@/views/practice/render-page.vue')
  },
  {
    path: '/menu-page',
    name: 'menu-page',
    component: () => import('@/views/practice/menu-page.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/practice/login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/practice/layout.vue')
  }
]
