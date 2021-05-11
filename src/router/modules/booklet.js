// 掘金小测的内容
export default [
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/booklet/form.vue')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('@/views/booklet/checkbox.vue')
  },
  {
    path: '/display',
    name: 'display',
    component: () => import('@/views/booklet/display.vue')
  },
  {
    path: '/table-render',
    name: 'table-render',
    component: () => import('@/views/booklet/table-render.vue')
  },
  {
    path: '/table-slot',
    name: 'table-slot',
    component: () => import('@/views/booklet/table-slot.vue')
  },
  {
    path: '/table-slot2',
    name: 'table-slot2',
    component: () => import('@/views/booklet/table-slot2.vue')
  },
  {
    path: '/table-slot3',
    name: 'table-slot3',
    component: () => import('@/views/booklet/table-slot3.vue')
  },

  {
    path: '/tree',
    name: 'tree',
    component: () => import('@/views/booklet/tree.vue')
  }
]
