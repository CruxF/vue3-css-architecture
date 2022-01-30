<template>
  <div class="box">
    <div class="header"></div>
    <div class="container">
      <div class="item" radius20>radius20</div>
    </div>
    <div class="container">
      <div class="item" radius8>radius8</div>
    </div>
    <div class="container">
      <div class="item" circle>circle</div>
    </div>
    <div class="container">
      <div class="item" bor-base>bor-base</div>
    </div>
    <div class="container">
      <div class="item" font-primary>font-primary</div>
    </div>
    <div class="container">
      <div class="item" bg-primary>bg-primary</div>
    </div>
    <div class="container">
      <div class="item" bga4>bga2</div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
@include b(box) {
  @include b(header) {
    height: 100px;
  }
  @include b(container) {
    position: relative;
    height: 200px;
    width: 200px;
    border: $border-base;
    margin-bottom: 30px;
    @include b(item) {
      height: 100px;
      width: 100px;
      border: 1px solid blueviolet;
    }
  }
  @include b(footer) {
    margin-top: 30px;
    height: 200px;
  }
}
</style>