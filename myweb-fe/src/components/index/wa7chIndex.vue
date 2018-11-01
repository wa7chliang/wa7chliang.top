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
          <div class="content-box" v-html="cutContent(item.content)"></div>
          <router-link class="more-a" :to="{path: '/article/'+item.id }">
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
        @current-change="currentChange"
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
      list: [],
      page: 1
    }
  },
  methods: {
    cutMoment (moment) {
      return moment.slice(0, moment.indexOf(' '))
    },
    cutContent (content) {
      if (content.indexOf('<pre><code>&lt;!--more--&gt;</code></pre>') > 0) {
        return content.slice(0, content.indexOf('<pre><code>&lt;!--more--&gt;</code></pre>'))
      } else if (content.indexOf('<!--more-->') > 0) {
        return content.slice(0, content.indexOf('<!--more-->'))
      }
      return content
    },
    async getList (url, data) {
      const res = await get(url, data)
      if (res.state) {
        this.list = res.list
      }
    },
    currentChange (val) {
      if (val !== this.page) {
        this.page = val
        this.getList('/api/posts/getListAll', {page: this.page})
        window.scrollTo(0, 0)
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
