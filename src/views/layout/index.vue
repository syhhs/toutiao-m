<template>
  <div class='layout-container'>
    <!-- 子路由的出口 -->
     <router-view/>

    <!-- 导航栏 -->
<van-tabbar class="layout-tabbar" v-model="active" route="">
  <van-tabbar-item  to='/'>
    <i slot='icon' class='toutiao toutiao-shouye'></i>
    <span>首页</span>
  </van-tabbar-item>
    <van-tabbar-item to='qa'>
    <i slot='icon' class='toutiao toutiao-wenda'></i>
    <span>问答</span>
  </van-tabbar-item>
    <van-tabbar-item to='video'>
    <i slot='icon' class='toutiao toutiao-shipin'></i>
    <span>视频</span>
  </van-tabbar-item>
    <van-tabbar-item to='my' >
    <i slot='icon' class='toutiao toutiao-wode'></i>
    <span>我的</span>
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: '0'
    }
  },

  methods: {},

  created () {
  }
}
</script>

<style lang='less' scoped>
.layout-container{
  .layout-tabbar{
    i.toutiao{
      font-size: 40px
    }
    span.text{
     font-size: 20px
    }
  }

}

</style>
