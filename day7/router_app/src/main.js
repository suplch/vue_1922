import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 默认会读取 文件夹里面的 index.js

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
