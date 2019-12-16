import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import('../views/Cinema.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
