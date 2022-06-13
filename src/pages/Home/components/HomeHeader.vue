<!-- 首页头部组件 -->
<template>
  <div class="home-header">
    <div class="header">
      <form action>
        <input type="text" placeholder="请输入关键字" />
        <i class="iconfont icon-sousuo2"></i>
      </form>
      <a href="javascript:;" class="iconfont icon-dkw_xiaoxi"></a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.home-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: transparent;
  .header {
    display: flex;
    justify-content: space-between;
    form {
      width: 90%;
      position: relative;
      input {
        width: 100%;
        width: calc(100% - 10px);
        margin-left: 10px;
        height: 3rem;
        margin-top: 0.7rem;
        border-radius: 1.5rem;
        text-indent: 1rem;
      }
      i {
        position: absolute;
        width: 4.4rem;
        height: 4.4rem;
        right: 0;
        text-align: center;
        line-height: 4.4rem;
        color: #ccc;
      }
    }
    a {
      width: 10%;
      display: block;
      text-align: center;
      line-height: 4.4rem;
      color: #fff;
      font-size: 2.2rem;
    }
  }
}
</style>