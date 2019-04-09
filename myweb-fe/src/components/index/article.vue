<template>
  <div class="article">
    <div class="content">
      <div class="title">
        <h3>{{articleObj.title}}</h3>
        <span class="moment">发表于:{{cutMoment(articleObj.moment)}}</span>
        <span class="pv">浏览次数:{{articleObj.pv}}</span>
      </div>
      <div id="content" class="content-box" v-html="cutContent(articleObj.content)"></div>
      <router-link class="more-a" to="/">
        <el-button type="primary" size="small">返回首页 »</el-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import {get, post} from '@/assets/js/util'
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
  name: 'v-article',
  data () {
    return {
      articleObj: {
        title: '',
        content: '',
        moment: '',
        pv: ''
      }
    }
  },
  methods: {
    cutMoment (moment) {
      return moment.slice(0, moment.indexOf(' '))
    },
    cutContent (content) {
      if (content.indexOf('<pre><code>&lt;!--more--&gt;</code></pre>') > 0) {
        return content.replace('<pre><code>&lt;!--more--&gt;</code></pre>', '')
      } else if (content.indexOf('<!--more-->') > 0) {
        return content.replace('<!--more-->', '')
      }
      return content
    },
    getContent (id) {
      if (id) {
        this.getContentApi(api.getArticle, {id})
      }
    },
    async getContentApi (url, data) {
      const res = await get(url, data)
      if (res.state) {
        this.articleObj = res.result
        this.addPvApi(api.addPv, {id: this.$route.params.id, pv: this.articleObj.pv})
      }
    },
    async addPvApi (url, data) {
      const res = await post(url, data)
      if (res.state) {
        this.articleObj.pv = ++this.articleObj.pv
      }
    }
  },
  mounted () {
    this.getContent(this.$route.params.id)
  },
  updated () {
    highlightCode()
  }
}
</script>
<style lang="less" scoped>
.article {
  .content {
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
</style>
