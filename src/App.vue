<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
  data() {
    return {

    };
  },
  // watch: {
  //   $route() {
  //     console.log(this.$route);
  //     this.active = this.$route.name;
  //     this.showTabbar = this.$route.meta.show;
  //   },
  // },
};
</script>
<style lang="less" scoped="scoped">
@import "./assets/styles/common.css";
@import "./assets/fonts/iconfont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
