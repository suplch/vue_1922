<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/content">Content</router-link>
    </div>
    <div style="border: solid 5px red">
      <router-view/>
    </div>
    
  </div>
</template>

<style>

</style>
