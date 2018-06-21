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
        <el-form-item label="文章内容">
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
    },
    onSubmit () {
      console.log(this.form)
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
  .title {
    padding: 30px 50px;
    h3 {
      color: #333;
      font-size: 30px;
    }
  }
}
</style>
