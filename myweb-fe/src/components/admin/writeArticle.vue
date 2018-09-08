<template>
  <div class="writeArticle">
    <div class="title">
      <h3>写文章</h3>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章类型">
          <el-select v-model="form.types" placeholder="选择文章类型">
            <el-option label="技术文章" value="1"></el-option>
            <el-option label="日常杂文" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="文章内容" class="cont-box">
          <div ref="editor"></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即发表</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {post} from '@/assets/js/util'
import E from 'wangeditor'
export default {
  name: 'writeArticle',
  data () {
    return {
      form: {
        title: '',
        types: '1',
        content: ''
      }
    }
  },
  methods: {
    initEditor () {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.form.content = html
      }
      editor.create()
      // 初始化内容
      // editor.txt.html(this.form.content)
    },
    onSubmit () {
      // <pre><code>&lt;!--more--&gt;</code></pre> 检测去掉这块东西
      let obj = {...this.form}
      this.writeArticle('/api/posts/writeArticle', obj)
    },
    async writeArticle (url, data) {
      const storageData = JSON.parse(window.localStorage.getItem('mydata'))
      const regMsg = await post(url, data, storageData.token)
      if (regMsg.state) {
        this.$message({
          message: '文章发表成功',
          type: 'success'
        })
        this.$router.push({path: '/admin/postsList'})
      } else {
        this.$message.error(regMsg.msg)
      }
    }
  },
  mounted () {
    this.initEditor()
  }
}
</script>
<style lang="less" scoped>
.writeArticle {
  padding-right: 200px;
  .cont-box {
    position: relative;
    z-index: 0;
  }
  .title {
    padding: 30px 50px;
    h3 {
      color: #333;
      font-size: 30px;
    }
  }
}
</style>
