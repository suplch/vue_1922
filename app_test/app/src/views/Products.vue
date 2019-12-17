<template>
  <div>
        产品列表
        <ul>
            <li v-for="product of products">
                {{ product.name }}, {{ product.price}}, {{product.pic}}
                <button @click="seeComment(product)">查看评论</button>
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
      'products'
    ])
  },
  created() {
    this.get_products_by_type(this.$route.params.type_id)
  },
  methods: {
    ...mapActions([
      'get_products_by_type'
    ]),
    seeComment(product) {
        this.$router.push('/comment/' + product._id)
    }
  }
}
</script>
