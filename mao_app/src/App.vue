<template>
  <div id="app">
    <router-view class="view"/>
    <header>{{ selectedNav.header }}</header>
    <nav>
      <div v-bind:key="nav.name" 
        v-for="nav of navs" 
        v-bind:class="{selected: selectedNav === nav}"
        v-on:click="selectNav(nav)">
          {{ nav.text }}
      </div>
    </nav>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'navs',         // 等效于 navs() { return this.$store.state.navs; }
      'selectedNav'
    ])
  },
  methods: {
    // ...mapActions([
    //   'selectNav'    // 等效于 selectNav(nav) { this.$store.dispatch('selectNav', nav); }
    // ]),

    ...mapActions({
      selectNav(dispatch, nav) {
        //this.$route;  // 获取一下路由相关的参数  params, query
        console.log(this.$router);
        this.$router.push(nav.path)
        dispatch('selectNav', nav);
      }
    })
  }
}
</script>
<style scope>
#app {
  width: 100%;
  height: 100%;
}

header {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  background: #e54847;
  color: white;
  text-align: center;
  line-height: 50px;
}

nav {
  position: fixed;
  background: white;
  bottom: 0px;
  width: 100%;
  height: 49px;
  display: flex;
  box-shadow: 0px 0px 5px grey;
}

nav > div {
  display: inline-block;
  flex: 1;
  text-align: center;
  line-height: 49px;
}

nav > div.selected {
  color: red;
}

.view {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
}

</style>
