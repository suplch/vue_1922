<template>
  <div class="home">
    <button @click="inc">增加</button>
    {{ count }} 次
    <button @click="dec">减少</button>

    <button @click="inc10">加 10</button>
    <button @click="dec10">减 10</button>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    inc() {
      // this.$store.state.count++
      // this.$store.commit('inc');
      // 分发 一个 动作 action , 携带参数 1
      this.$store.dispatch('inc', 1);
    },
    dec() {
      this.$store.dispatch('dec', 1);
    },
    inc10() {
      this.$store.dispatch('inc', 10);
    },
    dec10() {
      this.$store.dispatch('dec', 10);
    }
  },
  computed: { // 计算属性
    count() {
      return this.$store.state.count
    }
  },
  components: {

  }
}
</script>
