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
          <div id="content" class="content-box" v-html="cutContent(item.content)"></div>
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
        :current-page="page"
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
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import {api} from '@/assets/js/api'
//  使用代码高亮
const highlightCode = () => {
  let blocks = document.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
}
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
        hljs.initHighlightingOnLoad()
      }
    },
    currentChange (val) {
      if (val !== this.page) {
        this.page = val
        this.$router.push({name: 'wa7chIndex', query: {page: this.page}})
      }
    }
  },
  computed: {
    ...mapGetters([
      'allCount'
    ])
  },
  mounted () {
    this.$route.query.page ? this.page = this.$route.query.page : this.page = 1
    this.getList(api.getListAll, {page: this.page})
  },
  watch: {
    $route () {
      if (!this.$route.query.page) {
        this.page = 1
      }
      this.getList(api.getListAll, {page: this.page})
    }
  },
  updated () {
    highlightCode()
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
