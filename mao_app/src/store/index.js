import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const navs = [
  {name: 'dy', text: '电影', header: '猫眼电影', path: '/home'},
  {name: 'yy', text: '影院', header: '影院', path: '/cinema'},
  {name: 'wd', text: '我的', header: ''},
];

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
  }
})
