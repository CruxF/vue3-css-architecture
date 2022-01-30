<template>
  <div class="box">
    <div class="header"></div>
    <div class="container box__center">
      <div class="item item--center">box-center-item</div>
    </div>
    <div class="container">
      <div class="item item--both">center-translate-both-item</div>
    </div>
    <div class="container">
      <div class="item item--horizontal">center-translate-horizontal-item</div>
    </div>
    <div class="container">
      <div class="item item--vertical">center-translate-vertical-item</div>
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
      background-color: bisque;
      @include m(both) {
        @include center-translate;
      }
      @include m(horizontal) {
        @include center-translate('horizontal');
      }
      @include m(vertical) {
        @include center-translate('vertical');
      }
    }
  }
  @include b(box__center) {
    @include box-center;
  }
  @include b(footer) {
    margin-top: 30px;
    height: 200px;
  }
}
</style>