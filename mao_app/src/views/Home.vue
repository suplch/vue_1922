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
      <div class="movielist">
        <div v-for="movie of movie_list">
          {{ movie.nm }}, {{ movie.star }}, {{ movie.rt }}
        </div>
      </div>
    </div>
    
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
export default {
  name: 'home',
  computed: {
    ...mapState('movie', [
      'tabs',
      'selectedTab',
      'movie_list'
    ])
  },
  created() {
    this.movieOnInfoList();
  },
  methods: {
    ...mapActions('movie', {
      selectTab(dispatch, tab) {
        dispatch('selectTab', tab);
      },
      movieOnInfoList(dispatch) {
        dispatch('movieOnInfoList');
      }
    }),
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

  .movielist {
    position: absolute;
    top: 95px;
    left: 0px;
    right: 0px;
    bottom: 50px;
    overflow: auto;
  }

  .movielist > div {
    height: 114px;
    box-shadow: 0px 0px 5px red;
  }
</style>