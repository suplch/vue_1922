<template>
  <div id="app">
    {{ welcome }}
    <hr/>
    <input v-model="welcome" />
    <hr/>
    <Login v-on:dologin="startLogin" username="用户名字" password="口 令"></Login>
  </div>
</template>

<script>
import Login from './components/Login.vue' 

export default {
  name: 'app',
  data() {
    return {
      welcome: 'hello world'
    }
  },
  // components 代表一个局部组件
  components: {
    Login: Login
  },
  methods: {
    startLogin() {
      console.log('hllo');
    }
  }
}
</script>

<style>

</style>
