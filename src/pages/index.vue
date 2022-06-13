<template>
<div class="Index">
  <div id="tabbar" v-if="showTabbar">
    <ul>
      <router-link to="/home" tag="li">
        <div class="icon">
          <i class="iconfont icon-1" v-if="active != 'Home'"></i>
          <i class="iconfont icon-shouye2" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li">
        <div class="icon">
          <i
            class="iconfont icon-leimupinleifenleileibie"
            v-if="active != 'Category'"
          ></i>
          <i class="iconfont icon-leimupinleifenleileibie2" v-else></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/find" tag="li">
        <div class="icon">
          <i
            class="iconfont icon-dongtaiweixuanzhong"
            v-if="active != 'Find'"
          ></i>
          <i class="iconfont icon-dongtaixuanzhong" v-else></i>
        </div>
        <span>发现</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <div class="icon">
          <i class="iconfont icon-gouwuche" v-if="active != 'Cart'"></i>
          <i class="iconfont icon-gouwucheman" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="icon">
          <i class="iconfont icon-wode" v-if="active != 'Mine'"></i>
          <i class="iconfont icon-wodedangxuan" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
  <router-view />
</div>
</template>
<script>
export default {
  data() {
    return {
      active: "Home",
      showTabbar: true,
    };
  },
  //   watch: {
  //     $route() {
  //       console.log(this.$route);
  //       this.active = this.$route.name;
  //       this.showTabbar = this.$route.meta.show;
  //     },
  //   },
};
</script>

<style lang="less">
.router-link-active {
  color: #f20e28;
}
#tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
  z-index: 999;
  ul {
    display: flex;
    height: 49px;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      i {
        font-size: 22px;
      }
    }
  }
}
</style>
