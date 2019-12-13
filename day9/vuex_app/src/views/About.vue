<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$store.state.count++">
      增加
      {{ $store.state.count }}
    </button>
    
  </div>
</template>
