import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
