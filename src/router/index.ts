import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const _component = (file: string) => import(`@/views/${file}/index.vue`)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    meta: {
      hidden: true,
      title: '登录'
    },
    component: _component('login')
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      hidden: true,
      title: '首页'
    },
    component: _component('home')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      hidden: true,
      title: '错误'
    },
    component: _component('404')
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
