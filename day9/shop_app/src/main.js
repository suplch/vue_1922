import Vue from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 将 axios ajax 库 加到 原型上, 这样 其他组件就可以方便的访问了 this.$http.get
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
