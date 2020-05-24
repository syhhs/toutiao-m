<template>
  <div class='home-container'>
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button
      class='search-button'
      round
      icon="search"
      size="small"
      slot="title"
      type="info">
        搜索
      </van-button>
    </van-nav-bar>

    <!-- 滚动导航 -->
    <van-tabs class='channel-tab' v-model="active" swipeable animated>
       <van-tab title="标签 1">内容 1</van-tab>
       <van-tab title="标签 2">内容 2</van-tab>
       <van-tab title="标签 3">内容 3</van-tab>
       <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {
      active: '2'
    }
  },

  methods: {},

  created () {
  }
}
</script>

<style lang='less' scoped>

.home-container{
.van-nav-bar__title{
  max-width: unset!important;
}
.search-button{
  background-color: #5babfb;
  width: 555px;
  height: 64px;
  font-size: 28px;
  .van-icon{
  color: #fff;
  font-size: 32px;
    }
  }
  /deep/ .channel-tab{
    .van-tabs_wrap{
      height: 82px;
    }
    .van-tab{
      font-size: 30px;
      color: #777777;
      min-width: 200px;
      border-right: 1px solid #edeff3
    }
    .van-tab--active{
      color: #333;
    }
    .van-tabs__nav {
      padding-bottom: 0px;
    }
    .van-tabs__line{
      width: 31px!important;
      height: 8px;
      background-color: #3296fa;
      bottom: 8px;

    }
  }
}

</style>
