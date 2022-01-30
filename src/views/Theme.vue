<template>
  <div class="theme">
    <div class="header"></div>
    <div class="theme__set">
      <div class="set set--default" @click="changeTheme('default')"></div>
      <div class="set set--warm" @click="changeTheme('warm')"></div>
      <div class="set set--cool" @click="changeTheme('cool')"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "Theme",
  setup() {
    const changeTheme = (theme = 'default') => {
      window.document.documentElement.setAttribute("data-theme", theme);
    }
    return {
      changeTheme
    }
  }
}
</script>

<style lang='scss' scoped>
@include b(theme) {
  height: 100%;
  @include b(header) {
    height: 100px;
  }
  @include e(set) {
    margin-top: 20px;
  }
  @include b(set) {
    display: inline-block;
    box-sizing: border-box;
    height: 30px;
    width: 100px;
    margin-right: 30px;
    &:hover {
      cursor: pointer;
      border: 1px solid #000;
    }
    @include m(default) {
      background: #FF5777;
    }
    @include m(cool) {
      background: #409EFF;
    }
    @include m(warm) {
      background: #F9CC03;
    }
  }
  @include b(footer) {
    margin-top: 30px;
    height: 200px;
  }
}
</style>