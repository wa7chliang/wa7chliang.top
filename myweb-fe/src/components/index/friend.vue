<template>
  <div class="friend">
    <div class="content">
      <h3>友情链接列表</h3>
      <ul class="ul-list">
        <li v-for="(value, index) in friendList" :key="index">
          <a :href="address(value.address_link)">
            <div class="font-box" v-if="value.images_link === 'none'">
              {{value.friend_name.slice(0, 2)}}
            </div>
            <div class="img-box" v-else>
              <img :src="value.images_link">
            </div>
            <span>{{value.friend_name}}</span>
          </a>
        </li>
      </ul>
      <div class="tips">
        <p>互链的朋友请讲博客名称、博客地址、头像地址发送到邮箱wa7chliang@163.com！！欢迎各位朋友互链</p>
      </div>
    </div>
  </div>
</template>
<script>
import {get} from '@/assets/js/util'
export default {
  name: 'friend',
  data () {
    return {
      friendList: []
    }
  },
  methods: {
    async getList (url) {
      const resMsg = await get(url)
      if (resMsg.state) {
        this.friendList = resMsg.list
      }
    },
    address (url) {
      if (url.indexOf('http') >= 0) {
        return url
      } else {
        return 'http://' + url
      }
    }
  },
  created () {
    this.getList('/api/friend/getFriendList')
  }
}
</script>
<style lang="less" scoped>
.friend {
  h3 {
    font-size: 30px;
    color: #333;
    padding-bottom: 40px;
  }
  .content {
    padding: 40px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    .ul-list {
      overflow: hidden;
      li {
        float: left;
        overflow: hidden;
        margin-bottom: 30px;
        .img-box {
          width: 40px;
          height: 40px;
          float: left;
          border-radius: 80%;
          overflow: hidden;
          margin-right: 30px;
          img {
            display: block;
            width: 100%;
          }
        }
        .font-box {
          width: 40px;
          height: 40px;
          border-radius: 80%;
          background: orange;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          float: left;
          margin-right: 30px;
        }
        span {
          line-height: 40px;
          font-size: 20px;
          color: #333;
          float: left;
          width: 250px;
        }
        &:nth-of-type(2n) {
          float: right;
        }
        &::after {
          content: '';
          display: block;
          clear: both;
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
    .tips {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
