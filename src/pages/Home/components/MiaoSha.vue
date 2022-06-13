<!-- 秒杀 -->
<template>
  <div class="miaosha">
    <div class="title">
      <div class="icon">
        <img src="@/assets/images/ms-icon.png" alt />
      </div>
      <div class="time">
        距离结束还剩:
        <span>{{hours}}</span>
        <em>:</em>
        <span>{{mins}}</span>
        <em>:</em>
        <span>{{secs}}</span>
      </div>
    </div>
    <div class="seckillTabs">
      <ul class="seckill">
        <li
          :class="activeIndex==index?'active':''"
          v-for="(seckill,index) in seckillData.time_list"
          :key="seckill.id"
          @click="changeTabs(seckill.id,index)"
        >
          <span class="time">{{seckill.title}}</span>
          <div>
            <span v-if="seckill.status">抢购中</span>
            <span v-else>即将开始</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="seckillList">
      <ul>
        <li v-for="item in seckillData.seckill_list" :key="item.id">
          <div class="img">
            <img :src="item.goods_thumb" alt />
          </div>
          <div class="title">{{item.goods_name}}</div>
          <div class="price">{{item.sec_price}}</div>
          <div class="dprice">{{item.market_price}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["seckillData"],
  data() {
    //这里存放数据
    return {
      activeIndex: 0,
      hours: "",
      mins: "",
      secs: "",
      timer: null,
    };
  },
  methods: {
    miaosha() {
      //获取电脑当前时间  nowTime
      //设置目标时间      targetTime
      //找出时间差  oTime=targetTime-nowTime
      var nowTime = new Date();
      var targetTime = new Date("2020-12-29 17:30:00");
      var oTime = (targetTime - nowTime) / 1000;
      // console.log(oTime); //单位转换成秒  //4990.689
      //小时  60*60=3600秒
      this.hours = Math.floor(oTime / 3600);
      //   console.log(this.hours);
      if (this.hours <= 9 && this.hours >= 0) {
        this.hours = "0" + this.hours;
      }
      if (this.hours < 0) {
        this.hours = "00";
      }
      this.mins = Math.floor((oTime % 3600) / 60);
      //   console.log(this.mins);
      if (this.mins <= 9 && this.mins >= 0) {
        this.mins = "0" + this.mins;
      }
      if (this.mins < 0) {
        this.mins = "00";
      }
      this.secs = Math.floor(oTime % 60);
      if (this.secs <= 9 && this.secs >= 0) {
        this.secs = "0" + this.secs;
      }
      if (this.secs < 0) {
        this.secs = "00";
      }
      if (this.hours == "00" && this.mins == "00" && this.secs == "00") {
        clearInterval(this.timer);
      }
    },
    changeTabs(id, index) {
      console.log(id);
      this.activeIndex = index;
      this.$store.dispatch("ActChangeSeckillData", { id: id });
    },
  },
  mounted() {
    this.timer = setInterval(this.miaosha, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.miaosha {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  > .title {
    width: 90%;
    margin-left: 5%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      height: 2rem;
      width: 10rem;
      img {
        width: 100%;
      }
    }
    .time {
      span {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin: 1.5rem 0rem 1.5rem 0.5rem;
        text-align: center;
        line-height: 2rem;
        border-radius: 4px;
        background: red;
        color: #fff;
      }
      em {
        font-style: normal;
        color: red;
        padding-left: 0.5rem;
        font-style: 1.2rem;
      }
    }
  }
  .seckillTabs {
    width: 100%;
    height: 5rem;
    border-bottom: 1px solid #efefef;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        flex: 1;
        text-align: center;
        color: #999;

        .time {
          font-size: 1.4rem;
          font-weight: bold;
        }
      }
      .active {
        font-size: 1.6rem;
        color: #f55;
        .time {
          font-size: 1.6rem;
        }
      }
    }
  }
  .seckillList {
    width: 100%;
    overflow-x: auto;
    ul {
      width: 200%;
      li {
        float: left;
        width: 11rem;
        height: 19rem;
        text-align: center;
        margin: 1rem 1rem;
        img {
          width: 100%;
        }
        .title {
          width: 11rem;
          height: 3rem;
          line-height: 3rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .price {
          font-size: 2rem;
          color: #f55;
          &::before {
            content: "￥";
          }
        }
        .dprice {
          font-size: 1.2rem;
          color: #666;
          text-decoration: line-through;
          &::before {
            content: "￥";
          }
        }
      }
    }
  }
}
</style>