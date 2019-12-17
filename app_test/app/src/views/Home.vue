<template>
  <div class="home">
    <ul>
      <li v-bind:key="ptype._id" v-for="ptype of product_types">
        {{ ptype.name }} <button @click="see(ptype)">查看</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState([
      'product_types'
    ])
  },
  created() {
    this.all_types();
  },
  methods: {
    ...mapActions([
      'all_types'
    ]),
    see(ptype) {
      this.$router.push('/products/' + ptype._id)
    }
  }
}
</script>
