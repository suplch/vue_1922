import Vue from 'vue'
import Vuex from 'vuex'

// 使用 Vuex
Vue.use(Vuex)

// new Store 构造函数
export default new Vuex.Store({
  state: {
    count: 0
  },
  // 突变 修改 state
  mutations: {
    inc(state, payload) {
      state.count += payload;
    },
    dec(state, payload) {
      state.count -= payload;
    }
  },
  actions: {
    inc(context, payload) { // payload 负载数据
      console.log(context)
      context.commit('inc', payload);
    },
    dec(context, payload) {
      console.log(context)
      context.commit('dec', payload);
    }
  },
  modules: {
  }
})
