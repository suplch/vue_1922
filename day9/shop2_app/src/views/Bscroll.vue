<template>
    <div>
        <div ref="wrapper" class="wrapper">
            <ul class="content">
                <li :style="{display: loading ? 'block' : 'none'}" style="height: 30px; margin-top: -30px; box-shadow: unset; line-height: unset"> loading... </li>
                <li v-for="lang of langs"> {{ lang }} </li>
            </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>
    
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            loading: false,
            langs: []
        }
    },
    async created() {
        let result = await this.$http.get('/lang/list');
        this.langs = result.data;
    },
    mounted() {

        let scroll = new BScroll(this.$refs.wrapper, {
            pullDownRefresh: {
                threshold: 50,
                stop: 20
            },
            pullUpLoad: {
                threshold: 50
            }
        });

        scroll.on('pullingDown', async () => {
            console.log('下拉刷新');
            this.loading = true;
            let result = await this.$http.get('/lang/newlangs');
            this.loading = false;
            this.langs = [...result.data, ...this.langs];

            scroll.finishPullDown();
        });

        scroll.on('pullingUp', async () => {

            let result = await this.$http.get('/lang/more');
            this.langs = [...this.langs, ...result.data];

            scroll.finishPullUp();
        })
    }
}
</script>
<style>
    .wrapper {
        border: solid 5px red;
        height: 400px;
        overflow: hidden;
    }

    ul.content {
        list-style: none;
        margin: 0;
        padding: 0
    }

    ul.content li {
        height: 150px;
        line-height: 150px;
        box-shadow: 0px 0px 5px green;
    }
</style>