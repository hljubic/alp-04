import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Naslovnica',
    component: Home
  },
  {
    path: '/stranica_1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/stranica_2',
    name: 'Page2',
    component: () => import('../views/Page2.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
