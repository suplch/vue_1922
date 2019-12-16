import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import movie from './movie';
import cinema from './cinema';

Vue.use(Vuex)

const navs = [
  {name: 'dy', text: '电影', header: '猫眼电影', path: '/home'},
  {name: 'yy', text: '影院', header: '影院', path: '/cinema'},
  {name: 'wd', text: '我的', header: ''},
];

Vuex.Store.prototype.$http = axios;

export default new Vuex.Store({
  state: {
    selectedNav: navs[0],
    navs: navs
  },
  mutations: {
    selectNav(state, nav) {
      state.selectedNav = nav;
    }
  },
  actions: {
    selectNav(context, nav) {
      context.commit('selectNav', nav);
    }
  },
  modules: {
    movie,
    cinema
  }
})
