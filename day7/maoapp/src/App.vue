<template>
  <div id="app">
    <button @click="getUserInfo">获取用户信息</button>
    <button @click="deleteUser">删除用户</button>
    <button @click="listProducts">产品列表</button>
    <button @click="detailProduct">产品详情</button>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    getUserInfo() {
      axios.get('/user/user_info').then((result) => {
        alert(result.data.name + ' 年龄: ' + result.data.age);
      })
    },
    deleteUser() {
      axios.get('/user/delete_user').then((result) => {
        alert(result.data.ok);
      })
    },
    listProducts() {
        axios.get('/product/list').then((result) => {
          alert(result.data.length);
        })
    },
    detailProduct() {
        axios.get('/product/detail').then((result) => {
          alert(result.data.name + ' price: ' + result.data.price);
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
