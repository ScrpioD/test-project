<!--  -->
<template>
  <div class="other-page" infinite-scroll-distance="10" v-infinite-scroll="loadMore">
    <div class="bg" v-if="hideBg"></div>
    <div style="height:8.8rem"></div>
    <div class="container">
      <ul class="category-index">
        <li v-for="categoryData in categoryDatas.category" :key="categoryData.cat_id">
          <img :src="categoryData.touch_icon" alt />
          <span>{{categoryData.cat_name}}</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <ul class="brand-index">
        <li v-for="brand in categoryDatas.brand" :key="brand.brand_id">
          <img :src="brand.brand_logo" alt />
          <span>{{brand.brand_name}}</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <List :indexListData="categoryIndexList" :isLoading="isLoading" />
    </div>
    <div style="height:10rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import List from "@/components/List";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    List,
  },
  data() {
    //这里存放数据
    return {
      hideBg: true,
      page: 1,
      size: 10,
      cat_id: "",
    };
  },
  methods: {
    loadMore() {
      this.page = this.page + 1;
      console.log(123654);
      this.$store.dispatch("ActChangeCategoryGoodslist", {
        cat_id: this.cat_id,
        page: this.page,
        size: this.size,
      });
    },
  },
  computed: {
    categoryDatas() {
      return this.$store.state.categoryData;
    },
    categoryIndexList() {
      return this.$store.state.categoryGoodslist;
    },
    isLoading() {
      return this.$store.state.loading;
    },
  },
  watch: {
    $route(to) {
      document.documentElement.scrollTop = 0;
      this.$store.state.categoryGoodslist = [];
      console.log(to.query.cat_id);
      this.cat_id = to.query.cat_id;
      this.page = 1;
      // this.$store.dispatch("ActChangeCategoryGoodslist", {
      //   cat_id: to.query.cat_id,
      //   page: this.page,
      //   size: this.size,
      // });
    },
  },
  mounted() {
    console.log(this.$route);
    this.cat_id = this.$route.query.cat_id;
  },
};
</script>
<style lang="less">
.bg {
  height: 8.8rem;
  background: #f55;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.other-page {
  min-height: 100rem;
}
.category-index {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  li {
    height: 9rem;
    width: 7rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
}
.brand-index {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  li {
    height: 7rem;
    width: 8.8rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    img {
      width: 7rem;
      height: 3rem;
    }
  }
}
</style>