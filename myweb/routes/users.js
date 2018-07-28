var express = require('express');
var router = express.Router();
var sha1 = require('sha1')
var userModel = require('../lib/mysqlc')
const init = require('../config')

// 注册提交
router.post('/register', function (req, res, next) {
  const name = req.body.username.trim()
  let password = req.body.password.trim()
  const repassword = req.body.repassword
  let code = req.body.code.toUpperCase()
  let captcha = req.session.captcha
  let registerCode = req.body.registerCode.trim()
  //用于验证是否存在特殊字符
  var myReg = /[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/
  // 校验参数
  try {
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字请限制在1-10个字符')
    } else if (myReg.test(name)) {
      throw new Error('名字不能出现特殊字符')
    } else if (password.length < 6) {
      throw new Error('密码至少6个字符')
    } else if (password !== repassword) {
      throw new Error('两次输入密码不一致')
    } else if (code !== captcha) {
      throw new Error('验证码错误')
    } else if (registerCode === '') {
      throw new Error('注册码不能为空')
    } else if (registerCode !== init.registerCode) {
      throw new Error('注册码错误')
    } else {
      password = sha1(password)
      let obj = {
        username: name,
        password: password,
      } 
      userModel.findDataByUserName(name)
      .then(result => {
        if(result[0]) {
          throw new Error('已存在注册账号')
        } else {
          userModel.writeDataByUser(obj)
            .then(result2 => {
              if(result2.affectedRows !== 0) {
                delete obj.password
                res.json({
                  state: 1,
                  msg: '',
                  cont: obj
                })
                return 
              }
            }).catch(err2 => {
              res.json({
                state: 0,
                msg: '添加失败'
              })
              return 
            })
        }
      }).catch(err => {
        res.json({
          state: 0,
          msg: err.message
        })
        return  
      })
    }
  } catch (e) {
    res.json({
      state: 0,
      msg: e.message
    })
    return
  }
})

// 登录
router.post('/signin', function (req, res, next) {
  const name = req.body.username.trim()
  let password = req.body.password.trim()
  let code = req.body.code.toUpperCase()
  let captcha = req.session.captcha
  var myReg = /[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/
  try {
    if (!(name.length >= 1 && name.length <= 10)) {
      throw new Error('名字请限制在1-10个字符')
    } else if (myReg.test(name)) {
      throw new Error('名字不能出现特殊字符')
    } else if (password.length < 6) {
      throw new Error('密码至少6个字符')
    } else if (code !== captcha) {
      throw new Error('验证码错误')
    } else {
      password = sha1(password)
      let obj = {
        name: name,
        password: password
      }
      userModel.findDataByUserName(name)
        .then(result => {
          if(!result[0]) {
            throw new Error('账号未注册')
          } else if(result[0].password !== obj.password) {
            throw new Error('密码错误')
          }
          delete result[0].password
          res.json({
            state: 1,
            msg: '',
            cont: result[0]
          })
          return
        }).catch(err => {
          res.json({
            state: 0,
            msg: err.message
          })
          return
        })
    }
  } catch (e) {
    res.json({
      state: 0,
      msg: e.message
    })
    return
  }
})



module.exports = router;