const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // loader: 'sass-loader',
      scss: {
     //   additionalData: `@import "~@/assets/scss/main.scss";`
        additionalData: `@import "~@/assets/scss/utils/index.scss";`
      },

    }
  }
})
