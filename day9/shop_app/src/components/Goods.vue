<template>
  <div class="goods">
    <!--{{ goods_list }} -->
    商品列表
    {{  count }}, {{ mycount }} | {{ doubleCount }} | {{ tribleCount }}
    <hr/>
    {{ count2 }}, {{ count3 }}
    <div v-if="loading">
      数据加载中...
    </div>
    <ul v-else>
      <li :key="goods.id" v-for="goods of goods_list">
        {{ goods.name }}, 价格 {{ goods.price }}, {{ goods.pic }}
        <button @click="addToCart(goods)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>

import Vuex from 'vuex'
// mapState 将 state 状态里面的数据 映射为 一个对应的计算属性
// const mapState = Vuex.mapState;
// const mapGetters =  Vuex.mapGetters;

const { mapState, mapGetters } = Vuex;


export default {
  name: 'home',
  data() {
    return {
      firstName: '张',
      lastName: '三',
      loading: false
    }
  },
  async created() {
    //this.$http.get
    // loading true 代表加载中...
    this.loading = true;
    // ******  注意点 注意点 注意点  dispatch 返回 promise 这样可以处理 异步操作
    // this.$store.dispatch('get_goods_list').then(() => {
    //   // loading false 结束加载
    //   this.loading = false;
    // });


    // ******  注意点 注意点 注意点  dispatch 返回 promise 这样可以处理 异步操作
    // 版本2 
    // this.$store.dispatch('get_goods_list_v2').then(() => {
    //    this.loading = false;
    // })

    await this.$store.dispatch('get_goods_list_v2')
    this.loading = false;
    
  },
  methods: {
    addToCart(goods) {
      this.$store.dispatch('add_to_cart', goods);
    }
  },

  computed: {
    fullName() {
      return this.firstName + this.lastName
    },

    // count() {
    //   return this.$store.state.count
    // },

    ...mapGetters({
      // 相当于 创建了一个组件的计算属性 count2, 等效于 this.$store.getters.doubleCount;
      count2: 'doubleCount',
      // 相当于 创建了一个组件的计算属性 count3, 等效于 this.$store.getters.doubleCount;
      count3: 'tribleCount'
    }),

    ...mapGetters([
      // 相当于 创建了一个组件的计算属性 doubleCount, 等效于 this.$store.getters.doubleCount;
      'doubleCount',
      // 相当于 创建了一个组件的计算属性 tribleCount, 等效于 this.$store.getters.tribleCount;
      'tribleCount'
    ]),

    // doubleCount() {
    //   return this.$store.getters.doubleCount
    // },

    // tribleCount() {
    //   return this.$store.getters.tribleCount;
    // },

    ...mapState([
      'goods_list',  // 相当于   this.$store.state.goods_list
      'count',        // 相当于   this.$store.state.count
    ]),

    ...mapState({
      mycount: 'count'
    })

    // ...mapState({
    //   goods_list(state) {
    //     return state.goods_list
    //   },
    // })

    // goods_list() {
    //   return this.$store.state.goods_list
    // }
  }

  // computed: mapState({
  //   goods_list(state) {
  //     return state.goods_list
  //   }
  // })

  // computed: { // 计算属性 还是属性
  //   goods_list() {
  //     return this.$store.state.goods_list
  //   }
  // }
}
</script>

<style scope>
    .goods {
        border: solid 5px red;
    }
</style>