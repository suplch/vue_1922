<template>
  <div class="home">
    <div class="content">
      <div class="tab">
        <div v-bind:key="tab.name" 
          v-for="tab of tabs" 
          :class="{selected: tab === selectedTab}"
          v-on:click="selectTab(tab)">
          {{ tab.text }}
        </div>
      </div>
    </div>
    <component v-bind:is="selectedTab.comp"></component>
  </div>
</template>

<script>
// globalReleased: true
// haspromotionTag: false
// id: 1132247
// img: "http://p0.meituan.net/w.h/movie/6840aa952f3911525e0285c546ae65d61759449.jpg"
// nm: "早安公主"
// preShow: false
// rt: "2019-12-13"
// sc: 0
// showInfo: "今天6家影院放映46场"
// showst: 3
// star: "田雨,朱颜曼滋,邱雨铄"
// version: ""
// wish: 12226
// wishst: 0
import { mapState, mapActions } from 'vuex'
import Online from '../components/Online';
import Coming from '../components/Coming';
export default {
  name: 'home',
  data() {
    return {

    }
  },
  computed: {
    ...mapState('movie', [
      'tabs',
      'selectedTab'
    ])
  },
  methods: {
    ...mapActions('movie', {
      selectTab(dispatch, tab) {
        dispatch('selectTab', tab);
      }
    }),
  },
  components: {
    Online, Coming
  }
}
</script>
<style scope>
  .content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .tab {
    position: absolute;
    top: 50px;
    height: 44px;
    width: 100%;
    display: flex;
  }
  .tab > div {
    display: inline-block;
    flex: 1;
    line-height: 44px;
    text-align: center
  }

  .tab > div.selected {
    color: red;
    border-bottom: solid 2px red;
  }
</style>