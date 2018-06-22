var express = require('express');
var router = express.Router();
var userModel = require('../lib/mysqlc')

router.post('/writeArticle', function (req, res, next) {
  const title = req.body.title
  const content = req.body.content
  const types = req.body.types
  let d = new Date()
  const moment = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()} ${d.getHours()}:${(d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes())}:${(d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds())}`
  // 校验参数
  try {
    if (!title) {
      throw new Error('标题不能为空')
    } else if (!content) {
      throw new Error('内容不能为空')
    } else {
      const obj = {title, content, types, moment}
      userModel.writeArticle(obj)
      .then(result => {
        if(result.affectedRows !== 0) {
          res.json({
            state: 1,
            msg: '文章写入成功',
            cont: result
          })
          return
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

module.exports = router
