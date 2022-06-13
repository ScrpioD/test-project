import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../pages/index.vue'),
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          show: true
        },
        component: () => import('../pages/Home/Home.vue')
      },
      {
        path: '/category',
        name: 'Category',
        meta: {
          show: true
        },
        component: () => import('../pages/Category/Category.vue')
      },
      {
        path: '/find',
        name: 'Find',
        meta: {
          show: true
        },
        component: () => import('../pages/Find/Find.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        meta: {
          show: true
        },
        component: () => import('../pages/Cart/Cart.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        meta: {
          show: true
        },
        component: () => import('../pages/Mine/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
