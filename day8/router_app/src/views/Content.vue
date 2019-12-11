<template>
  <div >
    内容区

    <div style="border: solid 5px blue">
        <router-view name="list"></router-view>
        <hr/>
        <router-view name="cart"></router-view>
    </div>

  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>
