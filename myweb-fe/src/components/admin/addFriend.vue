<template>
  <div class="add-friend">
    <div class="title">
      <h3>添加友链</h3>
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
          <el-button type="primary" @click="onSubmit">立即添加</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {post} from '@/assets/js/util'
export default {
  name: 'add-friend',
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
      let obj = {...this.form}
      this.addFriend('/api/friend/writeFriend', obj)
    },
    async addFriend (url, data) {
      const storageData = JSON.parse(window.localStorage.getItem('mydata'))
      const resMsg = await post(url, data, storageData.token)
      if (resMsg.state) {
        this.$message({
          message: '添加友链成功',
          type: 'success'
        })
        this.$router.push({path: '/admin/friendList'})
      } else {
        this.$message.error(resMsg.msg)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.add-friend {
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
