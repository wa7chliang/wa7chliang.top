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
        <el-form-item class="dib" label="验证码" prop="code">
          <el-input v-model="form.code" auto-complete="off"></el-input>
          <img src="http://pic.qiantucdn.com/58pic/13/68/11/35W58PICzbv_1024.jpg!/fw/1024/watermark/url/L2ltYWdlcy93YXRlcm1hcmsveGlhb3R1LnBuZw==/align/center/crop/0x1024a0a0" alt="">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">注册</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
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
    var validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
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
        checkPass: '',
        code: ''
      },
      rules: {
        username: [{validator: validateUsername, trigger: 'blur'}],
        pass: [{validator: validatePass, trigger: 'blur'}],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        checkCode: [{ validator: validateCode, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(this.form)
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
      }
    }
  }
}

</style>
