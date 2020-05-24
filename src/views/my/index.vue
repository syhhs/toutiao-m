<template>
  <div class='my-container'>

    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class='left'>
          <van-image
            round
            class="avatar"
             :src="userInfo.photo"
           />
           <span class='name'>{{userInfo.name}}</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>

        </div>
      </div>
      <div class="data-stats">
         <div class="data-item">
          <span class="count">{{userInfo.art_count}}</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">{{userInfo.follow_count}}</span>
          <span class="text">关注</span>
        </div>
          <div class="data-item">
          <span class="count">{{userInfo.like_count}}</span>
          <span class="text">获赞</span>
        </div>
                <div class="data-item">
          <span class="count">{{userInfo.fans_count}}</span>
          <span class="text">粉丝</span>
        </div>
      </div>
    </div>

    <div v-else class="header not-login" @click="$router.push('/login')">
      <div class="login-btn">
        <img class="mobile-img" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>

    <van-grid :column-num="2" class="grid-nav" clickable>
     <van-grid-item class="grid-item">
       <i slot="icon" class="toutiao toutiao-shoucang"></i>
       <span slot="text" class="text">收藏</span>
     </van-grid-item>
     <van-grid-item class="grid-item">
       <i slot="icon" class="toutiao toutiao-lishi"></i>
       <span slot="text" class="text">历史</span>
     </van-grid-item>
   </van-grid>

    <van-cell title="消息通知" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell v-if='user' clickable @click="loginOut" class="logout-cell" title="退出登录" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'myIndex',
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {
      userInfo: { }
    }
  },

  methods: {
    loginOut () {
      // 清除本地和容器的user
      this.$dialog.confirm({
        title: '是否确认退出?'
      })
        .then(() => {
          console.log('退出吧')
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    },

    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
        console.log(data)
      } catch (error) {
        this.$toast('获取个人信息失败')
      }
    }
  },
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  }
}
</script>

<style lang='less' scoped>
.my-container{
  .header{
    height: 361px;
    background:url('~@/assets/banner.png');
    background-size: cover;
  }

  .not-login{
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .mobile-img{
      width: 132px;
      height: 132px;
      margin-bottom: 15px;
    }
    .text{
      color: #fff;
      font-size: 28px;
    }
    }
  }

  .user-info{
    .base-info{
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        .avatar{
          border: 4px solid #fff;
          width: 132px;
          height: 132px;
          margin-right: 23px;
        }
        .name{
          font-size: 30px;
          color: #fff;
        }
      }

    }
    .data-stats{
      height: 130px;
      display: flex;
      .data-item{
        flex: 1;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count{
          font-size: 36px
        }
        .text{
          font-size: 23px;
        }
      }
    }
  }

  .grid-nav{
    .grid-item{
      height: 141px;
      i.toutiao{
        font-size: 45px
      }
      .toutiao-shoucang{
        color: #eb5253
      }
      .toutiao-lishi{
        color: #ff9d1d
      }
      span.text{
        font-size: 28px
      }
    }
  }

    .logout-cell {
    text-align: center;
    color: #d86262;
  }

}

</style>
