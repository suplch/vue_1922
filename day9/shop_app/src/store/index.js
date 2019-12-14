import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    goods_list: [],
    cart: {
      items: [],
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
    },
    set_goods_list(state, goods_list) {
      state.goods_list = goods_list;
    }
  },
  actions: {
    add_to_cart({commit}, goods) {
      commit('add_to_cart', goods);
    },
    // ******  注意点 注意点 注意点  dispatch 返回 promise 这样可以处理 异步操作
    get_goods_list(context) {
      return axios.get('/goods/list').then(function(result) {
          if (result.data.code === 10000) {
            let goods_list = result.data.data;
            context.commit('set_goods_list', goods_list);
          } else {
            alert(`${result.data.msg}: (${result.data.code})`);
          }
      }).catch(function(err) {
        alert(err.message);
      });
    },
    // ******  注意点 注意点 注意点  dispatch 返回 promise 这样可以处理 异步操作
    // 使用 es6 async await 简化异步操作
    async get_goods_list_v2(context) {
      let result;
      try {
        result = await axios.get('/goods/list');
      } catch (err) {
        alert(err.message);
        return;
      }
      if (result.data.code === 10000) {
        let goods_list = result.data.data;
        context.commit('set_goods_list', goods_list);
      } else {
        alert(`${result.data.msg}: (${result.data.code})`);
      }
    }
  },
  modules: {
  }
})
