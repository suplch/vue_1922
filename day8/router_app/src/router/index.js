import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    redirect: {name: 'home'}
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    alias: '/house',
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
    ],
    beforeEnter(to, from , next) {
      console.log(to);
      console.log(from);
      console.log(next);

      let password = window.prompt('请输入口令');

      if (password === '123') {
        next();
      }

      // setTimeout(function() {
      //   next();
      // }, 3000);
    }
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
  //mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function(to, from , next) {
  console.log('全局守卫监控')
  console.log(to)
  console.log(from)
  
  next();
});

export default router
