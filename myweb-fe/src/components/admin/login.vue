<template>
  <div class="login">
    <el-card class="register-box">
      <p class="title">
        <span>注册</span>
        <router-link class="back" to="/admin">返回</router-link>
      </p>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="form.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="form.checkPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        username: [{validator: validateUsername, trigger: 'blur'}],
        pass: [{validator: validatePass, trigger: 'blur'}],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  display: flex;
  display: -webkit-flex;
  height: 100vh;
  .register-box {
    width: 480px;
    margin: auto;
    .title {
      line-height: 50px;
      font-size: 24px;
      color: #333;
      padding: 10px 20px;
      overflow: hidden;
      .back {
        float: right;
        color: #666;
        font-size: 16px;
      }
    }
  }
}

</style>
