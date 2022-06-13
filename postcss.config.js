//postcss.config.js
// 设计稿为750px时使用vant组件库会将vant组件的样式缩小，改动如下配置
/*const path = require('path');

module.exports = ({ webpack }) => {
  const viewWidth = webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750;
  return {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
        }, // 用来给不一样的浏览器自动添加相应前缀，如-webkit-，-moz-等等
        "postcss-px-to-viewport": {
            unitToConvert: "px", //
            viewportWidth: viewWidth, //
            unitPrecision: 6,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [], //需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            landscape: false //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        }
    }
  }
}*/

module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: "px", // 要转化的单位       
            viewportWidth: 375, // UI设计稿的宽度       
            unitPrecision: 6, // 转换后的精度，即小数点位数       
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换     
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw       
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw      selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，       
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换       
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false      
            replace: true, // 是否转换后直接更换属性值       
            exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配      
            landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            // landscapeUnit: 'vw', //横屏时使用的单位
            // landscapeWidth: 1134 //横屏时使用的视口宽度
        }
    }
}