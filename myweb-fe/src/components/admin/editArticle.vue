<template>
  <div class="editArticle">
    <div class="title">
      <h3>编辑文章</h3>
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
import {get, post} from '@/assets/js/util'
import E from 'wangeditor'
export default {
  name: 'editArticle',
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
      editor.txt.html(this.form.content)
    },
    ifEdit () {
      if (this.$route.query.id) {
        // 执行得到修改的内容
        this.getArticle('/api/posts/getArticle', {id: this.$route.query.id})
      } else {
        this.$router.push({path: '/admin'})
      }
    },
    async getArticle (url, data) {
      const storageData = JSON.parse(window.localStorage.getItem('mydata'))
      const res = await get(url, data, storageData.token)
      if (res.state) {
        this.form = res.result
        this.form.types += ''
        this.initEditor()
      } else {
        this.$router.push({path: '/admin'})
      }
    },
    onSubmit () {
      let obj = {...this.form}
      this.submitEditArticle('/api/posts/editArticle', obj)
    },
    async submitEditArticle (url, data) {
      const storageData = JSON.parse(window.localStorage.getItem('mydata'))
      const resMsg = await post(url, data, storageData.token)
      if (resMsg.state) {
        this.$message({
          message: '文章编辑成功',
          type: 'success'
        })
        this.$router.push({path: '/admin/postsList'})
      } else {
        this.$message.error(resMsg.msg)
      }
    }
  },
  created () {
    this.ifEdit()
  }
}
</script>
<style lang="less" scoped>
.editArticle {
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
