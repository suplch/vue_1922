<template>
  <div class="goods">
    <!--{{ goods_list }} -->
    商品列表
    <ul>
      <li :key="goods.id" v-for="goods of goods_list">
        {{ goods.name }}, 价格 {{ goods.price }}, {{ goods.pic }}
        <button @click="addToCart(goods)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    addToCart(goods) {
      this.$store.dispatch('add_to_cart', goods);
    }
  },
  computed: { // 计算属性 还是属性
    goods_list() {
      return this.$store.state.goods_list
    }
  }
}
</script>

<style scope>
    .goods {
        border: solid 5px red;
    }
</style>