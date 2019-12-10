<template>
    <div>
        产品列表
        <div v-if="loading">
            加载中 请稍等...
        </div>
        <ul v-else-if="goods_list.length > 0">
            <li v-for="goods of goods_list">
                {{goods.name}},  {{goods.price}}, {{ goods.pic }}
                {{goods.id}}
                <router-link v-bind:to="'/detail/' + goods.id">详情</router-link>
            </li>
        </ul>
        <div v-else>
            商品一下下架, 请您看看其他商品
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            goods_list: []
        }
    },

    created() {

        let goods_list_str = sessionStorage.getItem('goods_list');

        if (goods_list_str) {
            let goods_list = JSON.parse(goods_list_str);
            this.goods_list = goods_list
            return;
        }


        this.loading = true;
        axios.get('/product/list').then((result) => {
            console.log(result.data);
            this.goods_list = result.data;
            sessionStorage.setItem('goods_list', JSON.stringify(result.data));
            this.loading = false;
        }).catch((err) => {
            this.loading = false;
        }); 
    }
}
</script>

<style>

</style>