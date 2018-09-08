<template>
  <div class="login">
    <el-card class="register-box">
      <p class="title">
        <span>登陆</span>
        <router-link class="back" to="/admin/register">去注册</router-link>
      </p>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="form.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="dib" label="验证码" prop="code">
          <el-input v-model="form.code" auto-complete="off"></el-input>
          <img src="/api/captcha" onclick="javascript: this.src='/api/captcha?code='+ Math.random()">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登陆</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import {post} from '@/assets/js/util'
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
        callback()
      }
    }
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    return {
      myItem: {},
      form: {
        username: '',
        pass: '',
        code: ''
      },
      rules: {
        username: [{validator: validateUsername, trigger: 'blur'}],
        pass: [{validator: validatePass, trigger: 'blur'}],
        code: [{ validator: validateCode, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const obj = {
            username: this.form.username,
            password: this.form.pass,
            code: this.form.code
          }
          this.login('/api/users/signin', obj)
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    async login (url, data) {
      const regMsg = await post(url, data)
      if (regMsg.state) {
        var storage = window.localStorage
        const storageData = Object.assign({}, regMsg.cont, {'dataTime': new Date().getTime()}, {token: regMsg.token})
        storage.setItem('mydata', JSON.stringify(storageData))
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        this.$router.push({path: '/admin'})
      } else {
        this.$message.error(regMsg.msg)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  display: block;
  height: 100vh;
  position: relative;
  width: 100%;
  .register-box {
    width: 480px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .dib {
      .el-input {
        width: 70%;
      }
      img {
        width: 100px;
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
      }
    }
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
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

</style>
