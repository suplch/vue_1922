<template>
  <div class="home">
    购物车页面
    <Cart></Cart>
  </div>
</template>

<script>

import Cart from '../components/Cart.vue';

export default {
  name: 'cartpage',
  
  components: {
    Cart
  }
}
</script>
