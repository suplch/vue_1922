import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    goods_list: [
      {id: '111', name: '电脑', price: 10000, pic: '💻'},
      {id: '222', name: '键盘', price: 200, pic: '⌨️'},
      {id: '333', name: '鼠标', price: 99, pic: '🖱'},
    ],
    cart: {
      items: [
        {id: '111', name: '电脑', price: 10000, pic: '💻', count: 1},
        {id: '222', name: '键盘', price: 200, pic: '⌨️', count: 2},
      ],
      selectedItems: []
    }
  },
  // 在 store 里面也可以 定义 计算属性
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    tribleCount(state, getters) {
      return getters.doubleCount + state.count
    },
    cartTotal(state) {
      let items = state.cart.selectedItems;
      let total = 0;
      for (let item of items) {
          total += item.price * item.count;
      }
      return total;
    }
  },
  mutations: {
    add_to_cart(state, goods) {
      let item = state.cart.items.find(function(item) {
        return item.id === goods.id
      });
      if (item) {
        item.count++;
      } else {
        state.cart.items.push({
          ...goods,
          count: 1
        });
      }
    }
  },
  actions: {
    add_to_cart({commit}, goods) {
      commit('add_to_cart', goods);
    }
  },
  modules: {
  }
})
