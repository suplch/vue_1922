/*
    author: 

    例如:
    goods_list  是一个商品对象数组    idname 用来告诉 swiper 组件 数组里的那个属性是 主键id
    <Swiper v-bind:items="goods_list" idname="code">
        <template v-for="goods of goods_list" v-slot:[goods.code]>
            {{ goods.pic }}
        </template>
    </Swiper>
    
*/
Vue.component('Swiper', {
    props: ['items', 'idname'],
    template: `
        <div ref="sc" class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="item of items" class="swiper-slide">
                    <slot v-bind:name="item[idname]"></slot>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    `,
    // 当组件被挂载后执行
    mounted() {
        var swiper = new Swiper(this.$refs.sc, {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
})