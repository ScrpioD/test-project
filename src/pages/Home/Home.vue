<!-- 购物车组件 -->
<template>
  <div class="homeindex">
    <h2>首页</h2>
    <div class="see">
      天使lun偷袭
      <img src="../../assets/logo.png" alt="">
    </div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {sildeData} from '@/request/api.js'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      fireAlarmInfo: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
     this.$nextTick(() => {
      this.getsildeData();
    });
  },
  //方法集合
  methods: {
     //报警数据汇总
    async getsildeData() {
      let params = {
        id: 3,
      };
      let { success, data } = await sildeData(params);
      if (success) {
        this.fireAlarmInfo = data;
        console.log("轮播数据",this.fireAlarmInfo);
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped="scoped">
  .see{
    font-size: 28px;
    width: 300px;
    height: 200px;
    margin: auto;
    img{
      width: 100%;
    }
  }
</style>