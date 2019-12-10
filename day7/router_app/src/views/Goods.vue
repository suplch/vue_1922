<template>
    <div>
        产品列表
        <ul>
            <li v-for="goods of goods_list">
                {{goods.name}},  {{goods.price}}, {{ goods.pic }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {

    data() {
        return {
            goods_list: [
                {name: '香蕉', price: 10, pic: '🍌'},
                {name: '橙子', price: 10, pic: '🍊'},
                {name: '黄瓜', price: 10, pic: '🥒'},
            ]
        }
    }
}
</script>

<style>

</style>