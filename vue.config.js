// 使用 @vue/cli-service 提供的 defineConfig 帮手函数，以获得更好的类型提示：
const { defineConfig } = require("@vue/cli-service"); 
module.exports = defineConfig({
  transpileDependencies: true, //启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  lintOnSave:false, /*关闭语法检查*/
  devServer: {
    open: true,
    host: 'localhost',
    proxy:{
      '/api':{
        target:'https://x.dscmall.cn/api', //要代理的路径
        pathRewrite:{ '^/api': ''}
      },
      // '/apg':{
      //   target:'http://127.0.0.1:2002/api/portal',
      //   pathRewrite:{ '^/apg': '/'}
      // },
      // '/apd':{
      //   target:'http://127.0.0.1:2002/api/m',
      //   pathRewrite:{ '^/apd': '/'}
      // }
    }
},
//修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
chainWebpack: config =>{
  config.plugin('html')
    .tap(args => {
      args[0].title = "APP测试";
      return args;
    })
}
});
