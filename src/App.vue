<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/bem">BEM</router-link> |
      <router-link to="/boxCenter">BoxCenter</router-link> |
      <router-link to="/acss">ACSS</router-link> |
      <router-link to="/theme">Theme</router-link> |
    </div>
    <router-view/>
  </div>
</template>
<script>
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(()=>{
      window.document.documentElement.setAttribute("data-theme", "default")
    })
  }
}
</script>

<style lang="scss">
#app {
  padding: 30px;
  text-align: center;
}
</style>>

