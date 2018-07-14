<template>
  <div class="edit-friend">
    <div class="title">
      <h3>修改友链</h3>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="友链名字">
          <el-input v-model="form.friend_name"></el-input>
        </el-form-item>
        <el-form-item label="头像地址">
          <el-input v-model="form.images_link"></el-input>
        </el-form-item>
        <el-form-item label="友链地址">
          <el-input v-model="form.address_link"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {get} from '@/assets/js/util'
export default {
  name: 'edit-friend',
  data () {
    return {
      form: {
        friend_name: '',
        images_link: '',
        address_link: ''
      }
    }
  },
  methods: {
    onSubmit () {

    },
    ifEdit () {
      if (this.$route.query.id) {
        // 执行得到修改的内容
        this.getFriend('/api/friend/getFriendContent', {id: this.$route.query.id})
      } else {
        this.$router.push({path: '/admin'})
      }
    },
    async getFriend (url, data) {
      const res = await get(url, data)
      if (res.state) {
        this.form = res.cont
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
.edit-friend {
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
