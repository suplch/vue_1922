<template>
  <div class="home">
    <button @click="add_count">{{ count  }}</button>
    <button @click="inc_count"> {{ count }}</button>
    <hr/>
    <button @click="list()">Call list</button>
    <button @click="loadGoods_V2">load v2</button>
    <button @click="loadGoods">读取产品</button>

    <ul>
      <li v-for="goods of goods_list">
        {{ goods.name }}, {{ goods.price }}, {{  goods.pic }}
        <button @click="add2Cart(goods)">添加到购物车</button>
      </li>
    </ul>
    <hr/>
    购物车

    <ul>
      <li v-for="item of cart_items">
        {{item.name}}, {{item.price}}, {{item.pic}}, {{ item.count }}
      </li>
    </ul>
    {{ cart_items }}
  </div>
</template>

<script>
import Vuex from 'vuex';
const {mapActions} = Vuex;

export default {
  name: 'home',
  computed: {
    count() {
      return this.$store.state.count
    },
    goods_list() {
      return this.$store.state.goods.goods_list;
    },
    cart_items() {
      return this.$store.state.carts.cart.items;
    }
  },
  methods: {
    list() {
      this.$store.dispatch('goods/list');
    },

    ...mapActions([
      'add_count'  // 等效于  add_count() {  this.$store.dispatch('add_count'); }
    ]),

    ...mapActions({
      // 等效于  inc_count() {  this.$store.dispatch('add_count'); }
      inc_count: 'add_count'
    }),

    // add_count() {
    //   //this.$store.state.count++    // 不应该这样做

    //   this.$store.dispatch('add_count');
    // },

    // mapActions('模块路径', { 模块方法 ...})
    ...mapActions('goods', {
      loadGoods_V2(dispatch) {
        dispatch('get_goods_list')
      }
    }),
  
    loadGoods() {
      alert('开始加载')
      this.$store.dispatch('goods/get_goods_list').then(() => {
        alert('加载完毕')
      })
    },
    add2Cart(goods) {
      this.$store.dispatch('carts/add_to_cart', goods)
    }
  }
}
</script>
