 <template>
  <div class="cart">

    购物车
    <ul>
      <li v-for="item of cart_items">
        <input v-model="selected_items" type="checkbox" v-bind:value="item" />
        {{ item.name }}, 价格 {{ item.price }}, {{ item.pic }} 小计: {{ item.price * item.count }}
        <button @click="item.count--">-</button>
        {{ item.count }}
        <button @click="item.count++">+</button>
      </li>
    </ul>
    总计: {{ total  }}
    <button>结算</button>
    
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {

  },
  computed: { // 计算属性 还是属性
    cart_items() {
      return this.$store.state.cart.items;
    },
    total() {
        let items = this.$store.state.cart.selectedItems;
        let total = 0;
        for (let item of items) {
            total += item.price * item.count;
        }
        return total;
    },
    selected_items: {
        // 当读取访问 selected_items 时, 那么 调用 get 方法
        get() {
            return this.$store.state.cart.selectedItems
        },
        // 当 设置 修改 selected_items  那么 调用 set 
        set(value) {
            this.$store.state.cart.selectedItems = value;
        }
    }
    // selected_items() {
    //     return this.$store.state.cart.selectedItems
    // }
  }
}
</script>
<style scope>
    .cart {
        border: solid 5px green;
    }
</style>