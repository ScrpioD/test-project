<!-- 快捷导航 -->
<template>
  <div class="quick-nav">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(quickNav,index) in quickNavDatas" :key="index">
        <ul>
          <li v-for="quick in quickNav.child" :key="quick.id">
            <img :src="quick.imgsrc" alt />
            <span>{{quick.title}}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
    return {
      quickNavDatas: [
        {
          id: 1,
          child: [
            {
              id: 1001,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1002,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1003,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1004,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1005,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1006,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1007,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1008,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 1009,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 10010,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
          ],
        },
        {
          id: 2,
          child: [
            {
              id: 2001,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "22222",
            },
            {
              id: 2002,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2003,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2004,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2005,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2006,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2007,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2008,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 2009,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
            {
              id: 20010,
              imgsrc:
                "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
              title: "潮流服饰1",
            },
          ],
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.quick-nav {
  width: 100%;
  height: 20rem;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      height: 9rem;
      width: 20%;
      text-align: center;
      img {
        width: 7rem;
        height: 7rem;
      }
    }
  }
  .mint-swipe-indicators {
    bottom: 5px;
    .mint-swipe-indicator {
      opacity: 0.5;
      width: 2rem;
      height: 5px;
      border-radius: 3px;
      margin: 0px;
      background: rgba(255, 0, 0, 0.5);
    }
    .is-active {
      background: red;
      opacity: 1;
      border-radius: 0px;
    }
  }
}
</style>