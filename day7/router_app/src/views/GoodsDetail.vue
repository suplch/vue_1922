<template>
    <div>
        产品详细 {{ $route.params.pid }}
        <div v-if="loading">
            正在加载...
        </div>
        <div v-else-if="goods">
            {{ goods.name }}, {{ goods.price }}, {{ goods.pic }}
            
            <h1>{{ goods.desc }}</h1>
        </div>
        <div v-else>
            不好意思, .....
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            goods: undefined
        }
    },
    created() {
        //console.log(this.$route)
        this.loading = true;
        axios.get('/product/detail?pid=' + this.$route.params.pid).then((result) => {
            console.log(result.data)
            this.goods = result.data;
            this.loading = false;
        }).catch(() => {
            this.loading = false;
        });
    }
}
</script>

<style>

</style>