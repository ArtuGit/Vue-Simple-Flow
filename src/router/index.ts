import { createRouter, createWebHistory } from 'vue-router'
import FirstPageView from '../views/FirstPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPageView
    },
    {
      path: '/add-record',
      name: 'add-record',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SecondPageView.vue')
    },
    {
      path: '/all-records',
      name: 'all-records',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ThirdPageView.vue')
    }
  ]
})

export default router
