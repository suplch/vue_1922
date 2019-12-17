import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product_types: [],
    products: [],
    comment_list: []
  },
  mutations: {
    set_product_types(state, types) {
      state.product_types = types;
    },
    set_products(state, products) {
      state.products = products;
    },
    set_comment_list(state, comment_list) {
      state.comment_list =  comment_list;
    }
  },
  actions: {
    async all_types(context) {
      const result = await axios.get('/product/all_types');
      context.commit('set_product_types', result.data)
    },
    async get_products_by_type(context, type_id) {
      const result = await axios.get('/product/get_products_by_type', {
        params: {
          typeid : type_id
        }
      });
      context.commit('set_products', result.data);
    },
    async get_comment_by_pid(context, pid) {
      const result = await axios.get('/comment/get_comment_by_pid', {
        params: {
          pid: pid
        }
      });
      context.commit('set_comment_list', result.data);
    }
  },
  modules: {
  }
})
