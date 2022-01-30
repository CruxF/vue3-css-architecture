<template>
  <div class="about">
    <div class="header"></div>
    <div class="about-title">This is an about page title</div>
    <div class="about-content">This is an about page content</div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
@include b(header) {
  height: 100px;
}
.about-title {
  color: $color-primary;
}
.about-content {
  height: 100px;
  width: 200px;
  border: $border-base;
}
@include b(footer) {
  margin-top: 30px;
  height: 200px;
}
</style>