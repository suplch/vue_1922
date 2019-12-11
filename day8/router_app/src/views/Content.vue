<template>
  <div >
    内容区
    {{ $route.query.pid }}
    <div style="border: solid 5px blue">
        <router-view name="list"></router-view>
        <hr/>
        <router-view name="cart"></router-view>
    </div>

    相关产品
    <ul>
        <li>
            电脑
            <router-link v-bind:to="'/content?pid=789'">电脑</router-link>
        </li>
    </ul>

  </div>
</template>

<script>

export default {
    // 监视 路由跳转到本组件, 我们可以决定是否可以进来
    beforeRouteEnter(to, from ,next) {
        console.log('beforeRouteEnter')
        console.log('comp', to);
        console.log('comp', from);
        next();
    },
    // beforeRouteUpdate 钩子函数的目的是 监控当前路由的相关参数是否变化
    // 如果变化, 我们可以 获取最新的参数, 然后用最新的参数, 访问后台获取最新的数据
    beforeRouteUpdate(to, from ,next) {
        console.log('beforeRouteUpdate')
        console.log('comp', to);
        console.log('comp', from);
        console.log(to.query.pid)

        //axios.get('/getProduct?pid=' + to.query.pid);
        next();
    },
    // 控制是否可以来开本组件
    beforeRouteLeave(to, from ,next) {
        console.log('beforeRouteLeave')
        console.log('comp', to);
        console.log('comp', from);
        let value = window.prompt('留下买路财, 不多 10000');
        if (value === '10000') {
            next();
        }
        //next();
    },
    created() {

    }
}
</script>
