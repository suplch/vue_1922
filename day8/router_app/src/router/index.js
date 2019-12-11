import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [ // 子路由  当用户访问 的路径 为  /about/contact 的时候 匹配
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/Contact.vue')
      }
    ]
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('../views/Content.vue'),
    children: [
      {
        path: 'product',
        name: 'product',
        components: {
          list: () => import('../views/List.vue'),
          cart: () => import('../views/Cart.vue')
        }
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
