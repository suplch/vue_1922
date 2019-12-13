<template>
  <div class="goods">
    <!--{{ goods_list }} -->
    商品列表
    {{  count }}, {{ mycount }} | {{ doubleCount }} | {{ tribleCount }}
    <ul>
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
const mapState = Vuex.mapState;

export default {
  name: 'home',
  data() {
    return {
      firstName: '张',
      lastName: '三'
    }
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

    doubleCount() {
      return this.$store.getters.doubleCount
    },

    tribleCount() {
      return this.$store.getters.tribleCount;
    },

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