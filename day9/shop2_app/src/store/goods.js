
export default {
    namespaced: true,
    state: {
        goods_list: []
    },
    getters: {},
    mutations: {
        set_goods_list(state, goods_list) {
            state.goods_list = goods_list;
        }
    },
    actions:{
        list(context) {
            console.log(this)
            console.log('goods_ get list')
        },
        get_goods_list(context) {
            return this.$http.get('/goods/list').then(function(result) {
                if (result.data.code === 10000) {
                    let goods_list = result.data.data;
                    context.commit('set_goods_list', goods_list);
                } else {
                    alert(`${result.data.msg}: (${result.data.code})`);
                }
            }).catch(function(err) {
                alert(err.message);
            });
        },
            // ******  注意点 注意点 注意点  dispatch 返回 promise 这样可以处理 异步操作
        // 使用 es6 async await 简化异步操作
        async get_goods_list_v2(context) {
            let result;
            try {
                result = await this.$http.get('/goods/list');
            } catch (err) {
                alert(err.message);
                return;
            }
            if (result.data.code === 10000) {
                let goods_list = result.data.data;
                context.commit('set_goods_list', goods_list);
            } else {
                alert(`${result.data.msg}: (${result.data.code})`);
            }
        },
    }
}