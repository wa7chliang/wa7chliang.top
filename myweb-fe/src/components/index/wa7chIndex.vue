<template>
  <div class="wa7chIndex">
    <div class="ul-list">
      <ul>
        <li v-for="item in list" :key="item.id">
          <div class="title">
            <h3>{{item.title}}</h3>
            <span class="moment">发表于:{{cutMoment(item.moment)}}</span>
            <span class="pv">浏览次数:{{item.pv}}</span>
          </div>
          <div class="content-box" v-html="item.content"></div>
          <router-link class="more-a" to="/">
            <el-button type="primary" size="small">阅读全文 »</el-button>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="5"
        :total="allCount">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {get} from '@/assets/js/util'
export default {
  name: 'wa7chIndex',
  data () {
    return {
      list: [{
        id: 1,
        title: '123',
        content: '<p>这里是内容</p>',
        moment: '2018-6-22 21:57:56',
        pv: 0,
        types: 1
      }, {
        id: 2,
        title: '123',
        content: '<p>这里是内容</p>',
        moment: '2018-6-22 21:57:56',
        pv: 0,
        types: 1
      }],
      page: 1
    }
  },
  methods: {
    cutMoment (moment) {
      return moment.slice(0, moment.indexOf(' '))
    },
    async getList (url, data) {
      const res = await get(url, data)
      if (res.state) {
        this.list = res.list
      }
    }
  },
  computed: {
    ...mapGetters([
      'allCount'
    ])
  },
  created () {
    this.getList('/api/posts/getListAll', {page: this.page})
  }
}
</script>
<style lang="less" scoped>
.wa7chIndex {
  .ul-list {
    ul {
      li {
        padding: 40px;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 40px;
        .title {
          text-align: center;
          padding-bottom: 60px;
          h3 {
            font-size: 26px;
            color: #333;
            padding-bottom: 20px;
          }
          span {
            font-size: 12px;
            margin-right: 20px;
          }
          .moment {
            color: #00a7e0;
          }
          .pv {
            color: #ff3f1a;
          }
        }
        .more-a {
          padding-top: 40px;
          display: block;
          button {
            margin: 0 auto;
            display: block;
          }
        }
      }
    }
  }
  .pagination {
    padding: 15px 0;
    background: #fff;
    border-radius: 5px;
    text-align: center;
  }
}
</style>
