<template>
  <div class="bem">
    <div class="header">
      <div class="header__nav">nav box</div>
      <div class="header__logo">logo box</div>
    </div>
    <div class="content">
      <div class="content__title">content title</div>
    </div>
    <div class="footer">
      <div class="item item--red">red</div>
      <div class="item item--blue">blue</div>
      <div class="item item--green">green</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include b(bem) {
  height: 600px;
  background-color: #ccc;
}
@include b(header) {
  height: 100px;
  border: $border-base;
  @include e(nav) {
    text-align: left;
  }
  @include e(logo) {
    text-align: right;
  }
}
@include b(content) {
  height: 100px;
  margin-top: 10px;
  @include e(title) {
    font-size: 20px;
  }
}
@include b(footer) {
  @include b(item) {
    background-color: aquamarine;
    @include m(red) {
      color: red;
    }
    @include m(blue) {
      color: blue;
    }
    @include m(green) {
      color: green;
    }
  }
}
</style>