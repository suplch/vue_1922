import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // 将 store 数据状态管理器 注入到 vue 实例
  store,
  render: h => h(App)
}).$mount('#app')
