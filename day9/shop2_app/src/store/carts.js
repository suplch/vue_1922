export default {
    namespaced: true,
    state: {
        cart: {
            items: [],
            selectedItems: []
        }
    },
    getters: {
        cartTotal(state) {
            let items = state.cart.selectedItems;
            let total = 0;
            for (let item of items) {
                total += item.price * item.count;
            }
            return total;
        }
    },
    mutations: {
        add_to_cart(state, goods) {
            let item = state.cart.items.find(function(item) {
              return item.id === goods.id
            });
            if (item) {
              item.count++;
            } else {
              state.cart.items.push({
                ...goods,
                count: 1
              });
            }
        },
    },
    actions:{
        list(context) {
            console.log('carts get list')
        },
        add_to_cart({commit}, goods) {
            commit('add_to_cart', goods);
        },
    }
}