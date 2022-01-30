module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        prependData: `@import "@/style/global.scss";`
      },
    }
  }
}