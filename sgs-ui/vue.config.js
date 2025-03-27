const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: process.env.VUE_APP_PORT || 3000,
    open: true,       // 自动打开浏览器
    hot: true,        // 启用热模块替换
    client: {
      overlay: {
        warnings: false,
        errors: true   // 只显示错误覆盖层
      }
    }
  }
})