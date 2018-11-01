<template>
  <div class="writeArticleByMackDown">
    <h3 class="title">mackdown写文章</h3>
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
          <div id="editor">
            <mavon-editor @save="save" style="height: 100%" v-model="value"></mavon-editor>
          </div>
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
var mavonEditor = require('mavon-editor')
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'writeArticleByMackDown',
  data () {
    return {
      form: {
        title: '',
        types: '1',
        content: ''
      },
      value: ''
    }
  },
  methods: {
    save (value, render) {
      this.form.content = render
    },
    onSubmit () {
      let obj = {...this.form}
      this.writeArticle('/api/posts/writeArticleByMackdown', obj)
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
  components: {
    'mavon-editor': mavonEditor.mavonEditor
  }
}
</script>
<style lang="less" scoped>
#editor {
  margin: auto;
  width: 95%;
  height: 480px;
}
.title {
  line-height: 80px;
  padding-left: 20px;
}
</style>
