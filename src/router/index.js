import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/layout/index.vue'
NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
})
const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    meta: {
      requireAuth: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history:
    process.env.NODE_ENV === 'production'
      ? createWebHashHistory('/vue3-element-admin/')
      : createWebHistory('/'),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
  return true
})

router.afterEach(() => {
  NProgress.done()
})

export default router
