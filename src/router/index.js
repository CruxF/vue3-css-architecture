import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/bem',
    name: 'Bem',
    component: () => import('../views/BEM.vue')
  },
  {
    path: '/boxCenter',
    name: 'BoxCenter',
    component: () => import('../views/BoxCenter.vue')
  },
  {
    path: '/acss',
    name: 'ACSS',
    component: () => import('../views/ACSS.vue')
  },
  {
    path: '/theme',
    name: 'Theme',
    component: () => import('../views/Theme.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
