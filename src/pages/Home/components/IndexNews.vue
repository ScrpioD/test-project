<!--  -->
<template>
  <div class="index-news">
    <div class="news">
      <div class="icon">
        <img src="@/assets/images/hot-pic.png" alt />
      </div>
      <ul class="news-list" :class="{trans:flag}" ref="news">
        <li v-for="newsListData in newsListDatas" :key="newsListData.id">{{newsListData.title}}</li>
      </ul>
      <div class="iconfont icon-jiantou1"></div>
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
    return {
      timer: null,
      flag: false,
      newsListDatas: [
        {
          id: 1,
          title: "滚动新闻001",
        },
        {
          id: 2,
          title: "滚动新闻002",
        },
        {
          id: 3,
          title: "滚动新闻003",
        },
        {
          id: 4,
          title: "滚动新闻004",
        },
      ],
    };
  },
  methods: {
    scrollNews() {
      var oUl = this.$refs.news; //获取ul Dom节点
      //   console.log(oUl);
      oUl.style.top = "-4rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.newsListDatas.push(this.newsListDatas[0]);
        this.newsListDatas.shift();
        oUl.style.top = "0rem";
        this.flag = !this.flag;
      }, 500);
    },
  },
  mounted() {
    this.timer = setInterval(this.scrollNews, 2000);
  },
  destroyed() {
    //组件销毁清除定时器
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.index-news {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &::before {
    content: "";
    width: 90%;
    margin: 1rem 5% 0.5rem;
    height: 1px;
    background: #efefef;
  }
  .news {
    width: 100%;
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    height: 4rem;
    position: relative;
    overflow: hidden;
    .icon {
      height: 3rem;
      img {
        height: 3rem;
        margin-top: 0.5rem;
      }
    }
    .news-list {
      position: absolute;
      left: 6rem;
      width: 70%;
      margin-left: 2rem;
      line-height: 4rem;
    }
    .trans {
      transition: all 0.5s;
    }
    .iconfont {
      width: 2.2rem;
      height: 4rem;
      line-height: 4rem;
      text-align: center;
      font-size: 2.2rem;
    }
  }
}
</style>