<template>
  <div>
    影院



    <div class="filter">
      <button @click="showFilter">全 城</button>
    </div>
    
    <div class="cinema_list">
      <div v-for="cinema of cinema_list">
        <div>{{ cinema.nm }}</div>
        <div>{{ cinema.addr}}</div>
        <div>{{ cinema.promotion.cardPromotionTag}}</div>
        <div></div>
      </div>
    </div>
    <div v-show="showFilterDialog" class="filter_dialog">
      <FilterDialog v-on:region="selectRegion($event)"></FilterDialog>
    </div>
  </div>
</template>
<script>
// addr: "昌平区回龙观镇北清路1号院7号楼内7-101-26"
// distance: "3.9km"
// id: 26195
// mark: 0
// nm: "大地院线影城（珠江摩尔店）"
// promotion: {cardPromotionTag: "开卡特惠，首单2张最高立减6元"}
// sellPrice: "33"
import { mapState, mapActions } from 'vuex';
import FilterDialog from '../components/FilterDialog';
export default {
  data() {
    return {
      showFilterDialog: false
    }
  },
  created() {
    this.cinemaList();
    if (!localStorage.getItem('filter_cinemas')) {
      this.filterCinemas();
    } else {
      let str = localStorage.getItem('filter_cinemas');
      this.$store.commit('cinema/set_filter_cinemas', JSON.parse(str));
    }
  },
  computed: {
    ...mapState('cinema', [
      'cinema_list'
    ])
  },
  methods: {
    ...mapActions('cinema', {
      cinemaList(dispatch) {
        dispatch('cinemaList')
      },
      filterCinemas(dispatch) {
        dispatch('filterCinemas');
      },
      selectRegion(dispatch, regionItem) {
        this.showFilterDialog = false;
        dispatch('selectRegion');
      },
    }),
    
    showFilter() {
      this.showFilterDialog = !this.showFilterDialog;
    }
  },
  components: {
    FilterDialog
  }
}
</script>
<style scope>

  .cinema_list {
    position: absolute;
    top: 134px;
    left: 0px;
    right: 0px;
    bottom: 50px;
    overflow: auto;
    box-shadow: 0px 0px 5px red;
  }

  .cinema_list > div {
    height: 124px;
    margin: 7px 0px 7px 0px;
    box-shadow: 0px 0px 5px blue;
  }

  .filter {
    position: absolute;
    top: 114px;
  }

  .filter_dialog {
    position: absolute;
    top: 50%;
    left: 0px;
    right: 0px;
    height: 400px;
    box-shadow: 0px 0px 50px blue;
    margin-top: -200px;
    background: white;
  }

</style>