const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false ,   //关闭语法检查 不关闭  定义变量却不赋值会报错！ 
  // 开启代理服务器 (方式一)
  // devServer: {
  //   proxy: 'http://localhost:8000'
  // },
  // 开启代理服务器 (方式二)
  // devServer: {
  //   proxy: {
  //     //'/api'是个请求前缀 如果有该标识的请求会直接去请求代理 名字可改
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       pathRewrite:{'^/api':''},
  //       // ws: true,
  //       // changeOrigin: true
  //     },
  //     // '/foo': {
  //     //   target: '<other_url>'
  //     // }
  //   }
  // },

})
