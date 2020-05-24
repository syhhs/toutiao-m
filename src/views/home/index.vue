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
       <van-tab
       :title='channel.name'
       v-for="channel in channels"
       :key="channel.id"
       >
       <article-list :channel='channel'></article-list>
       </van-tab>
        <div slot='nav-right' class="placeholder"></div>
       <div slot='nav-right' class="more">
         <i class="toutiao toutiao-gengduo"></i>
       </div>
</van-tabs>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list.vue'

export default {
  name: 'homeIndex',
  components: {
    ArticleList
  },
  data () {
    return {
      active: '2',
      channels: {}
    }
  },

  methods: {
    async loadChannels () {
      try {
        const { data } = await getUserChannels()
        this.channels = data.data.channels
        console.log(data)
      } catch (error) {
        this.$toast('获取频道数据失败')
      }
    }
  },

  created () {
    this.loadChannels()
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
      border-right: 1px solid #edeff3;
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
      .more{
          position: fixed;
          display: flex;
          right: 0;
          width: 66px;
          height: 82px;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          opacity: 0.902;
          i.toutiao{
            font-size: 33px;
          }

          &:before{
            content: '';
            position: absolute;
            left: 0;
            width: 1px;
            height: 100%;
            background-image: url(~@/assets/gradient-gray-line.png);
            background-size: contain;
          }
         }
         .placeholder{
           width: 66px;
           height: 82px;
           flex-shrink: 0;
         }
}
</style>
