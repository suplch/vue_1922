import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render 渲染 App 组件
  render (createElement) {
    return createElement(App)
  }
}).$mount('#app')
