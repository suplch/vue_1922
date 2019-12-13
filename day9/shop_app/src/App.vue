<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cart">购物车 ({{ items_count }}) </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    items_count() {
      let items = this.$store.state.cart.items;
      let count = 0;
      for (let item of items) {
        count += item.count;
      }
      return count;
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
