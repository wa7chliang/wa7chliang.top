<template>
  <div class="edit-video-array">
    <div class="title">
      <h3>编辑动漫</h3>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="动漫名字">
          <el-input v-model="form.comic_name"></el-input>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-model="form.images_link"></el-input>
        </el-form-item>
        <el-form-item label="动漫集数">
          <el-input v-model="form.comic_count"></el-input>
        </el-form-item>
        <el-form-item label="首播日期">
          <el-input v-model="form.comic_date"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'editVideoArray',
  data () {
    return {
      form: {
        comic_name: '',
        images_link: '',
        comic_count: '',
        comic_date: ''
      }
    }
  },
  methods: {
    onSubmit () {

    },
    ifEdit () {
      if (this.$route.query.id) {
        // 执行得到修改的内容

      } else {
        this.$router.push({path: '/admin'})
      }
    }
  },
  created () {
    this.ifEdit()
  }
}
</script>
<style lang="less" scoped>
.edit-video-array {
  padding-right: 400px;
  .title {
    padding: 30px 50px;
    h3 {
      color: #333;
      font-size: 30px;
    }
  }
}
</style>
