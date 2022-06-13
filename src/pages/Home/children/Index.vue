<!--  -->
<template>
  <div class="index-page" infinite-scroll-distance="10" v-infinite-scroll="loadMore">
    <div class="index-header">
      <div class="index-header-bg" :style="colorObj"></div>
      <div class="bg" v-if="hideBg"></div>
      <div class="swiper">
        <Swipe @changeColor="getIndexColor" />
      </div>
    </div>
    <div class="container">
      <QuickNav />
      <IndexNews />
    </div>
    <div class="container">
      <MiaoSha :seckillData="seckillData" />
    </div>
    <div class="container list-index">
      <ul class="listTabs">
        <li
          class="tabs-item"
          v-for="(tabslist,index) in listTabsData"
          @click="changeTabs(index,tabslist.type)"
          :key="tabslist.id"
        >
          <h3>{{tabslist.title}}</h3>
          <p :class="pIndex==index?'active':''">{{tabslist.tips}}</p>
        </li>
      </ul>
      <List :indexListData="indexListData" :isLoading="isLoading" />
    </div>
    <div style="height:15rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swipe from "@/components/Swipe"; //@默认指向src目录
import QuickNav from "../components/QuickNav";
import IndexNews from "../components/IndexNews";
import MiaoSha from "../components/MiaoSha";
import List from "@/components/List";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    IndexNews,
    MiaoSha,
    List,
  },
  data() {
    //这里存放数据
    return {
      bestListDatas: [],
      pIndex: 0,
      listTabsData: [
        {
          id: 1,
          title: "精选",
          tips: "为您推荐",
          type: "is_best",
        },
        {
          id: 2,
          title: "社区",
          tips: "新奇好物",
          type: "",
        },
        {
          id: 3,
          title: "新品",
          tips: "潮流上新",
          type: "is_new",
        },
        {
          id: 4,
          title: "热卖",
          tips: "火热爆款",
          type: "is_hot",
        },
      ],
      colorObj: {},
      hideBg: false,
      colorArr: [
        {
          background: "red",
        },
        {
          background: "green",
        },
        {
          background: "blue",
        },
      ],
      page: 1,
      size: 10,
      type: "is_best",
    };
  },
  computed: {
    seckillData() {
      return this.$store.state.seckillData;
    },
    indexListData() {
      return this.$store.state.indexListDatas;
    },
    isLoading() {
      return this.$store.state.loading;
    },
  },
  //方法集合
  methods: {
    getIndexColor(data) {
      // console.log(data);
      this.colorObj = this.colorArr[data];
    },
    loadMore() {
      console.log(123456);
      this.page++;
      let params = {
        page: this.page,
        size: this.size,
        type: this.type,
      };
      this.$store.dispatch("ActChangeIndexListData", params);
    },
    scrollIndexPage() {
      // console.log(123);
      // console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop > 200) {
        this.hideBg = true;
      } else {
        this.hideBg = false;
      }
    },
    changeTabs(index, type) {
      console.log(this.$store.state.indexListDatas);
      this.$store.state.indexListDatas = [];
      this.pIndex = index;
      this.page = 1;
      this.type = type;
      let params = {
        page: this.page,
        size: this.size,
        type: this.type,
      };
      this.$store.dispatch("ActChangeIndexListData", params);
      console.log(type);
    },
  },
  mounted() {
    console.log(this.$store.state.num);
    this.$store.dispatch("ActChangeSeckillData", { id: 28 });
    let params = {
      page: this.page,
      size: this.size,
      type: this.type,
    };
    this.$store.dispatch("ActChangeIndexListData", params);
    window.addEventListener("scroll", this.scrollIndexPage, false);
  },
};
</script>
<style lang="less">
.index-page {
  .listTabs {
    margin-top: 1rem;
    height: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      h3 {
        font-size: 1.6rem;
      }
      p {
        background: transparent;
        color: #666;
        width: 6.4rem;
        height: 2rem;
        line-height: 2rem;
        margin: 0rem auto 1rem;
        border-radius: 1rem;
      }
      .active {
        background: #f55;
        color: #fff;
      }
    }
  }
  .bg {
    height: 8.8rem;
    background: #f55;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    width: calc(100% - 2rem);
    position: relative;
    top: 7rem;
    background: #fff;
    border-radius: 1rem;
  }
}
.index-header {
  position: relative;
  .index-header-bg {
    height: 14.8rem;
    background: #f55;
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    transition: all 0.5s;
  }
  .swiper {
    position: absolute;
    top: 10rem;
    z-index: 99;
    width: 100%;
  }
}
</style>