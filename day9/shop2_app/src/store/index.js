import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import goods from './goods';
import carts from './carts';

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add_count(state) {
      state.count++;
    }
  },
  actions: {
    add_count(context) {
      const {commit, state} = context;
      commit('add_count');
    }
  },
  modules: {
    goods,
    carts
  }
})
