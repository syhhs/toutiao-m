<template>
  <div class='article_list'>
<van-pull-refresh  success-text="刷新成功" v-model="isRefashLoading" @refresh="onRefresh">

    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="item in list" :key="item.id" :title="item.title" />
</van-list>
</van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      isRefashLoading: false
    }
  },

  methods: {
    async onLoad () {
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 0
        })
        const { results } = data.data
        this.list.push(...results)
        // 本次数据加载结束之后要把加载状态设置为结束
        this.loading = false
        // 判断数据是否全部加载结束
        if (results.length) {
          this.timestamp = data.data.pre_timestamp
        } else {
          this.finished = true
        }
        console.log(data)
      } catch (error) {
        this.loading = false
        this.$toast('获取数据失败')
      }
    },

    async onRefresh () {
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 0
        })
        this.list.unshift(...data.data.results)
      } catch (error) {
        this.$toast('刷新失败')
      }
      this.isRefashLoading = false
    }
  },

  created () {}
}
</script>

<style lang='less' scoped>

</style>
