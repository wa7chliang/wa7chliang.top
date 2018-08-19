var express = require('express');
var router = express.Router();
var postsModel = require('../lib/mysqlc')

router.post('/writeArticle', function (req, res, next) {
  const title = req.body.title
  const content = req.body.content
  const types = req.body.types
  let d = new Date()
  const moment = `${d.getFullYear()}-${(d.getMonth()+1)<10?'0'+(d.getMonth()+1):d.getMonth()+1}-${d.getDate()<10?'0'+d.getDate():d.getDate()} ${d.getHours()}:${(d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes())}:${(d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds())}`

  // 对于特殊字符双引号进行转义(解决数据库不能存双引号的问题)
  let newContent = content.replace(/["]/g, (target) => {
    return {
        '"': '&quot;',
    }[target]
  })
  let newTitle = title.replace(/["]/g, (target) => {
    return {
        '"': '&quot;',
    }[target]
  })
  
  // 校验参数
  try {
    if (!title) {
      throw new Error('标题不能为空')
    } else if (!content) {
      throw new Error('内容不能为空')
    } else {
      const obj = {title: newTitle, content: newContent, types, moment}
      postsModel.writeArticle(obj)
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

router.get('/getList', function (req, res, next) {
  const page = req.query.page || 1
  const size = req.query.size || 10
  let list = ''
  let count = 0
  let obj = {page, size}
  postsModel.findTitleListByLimit(obj)
    .then(result => {
      if (result) {
        list = result
        postsModel.findCountByList().then(result2 => {
          count = result2[0].listCount
          res.json({
            state: 1,
            list,
            count
          })
          return
        }).catch(e2 =>  {
          res.json({
            state: 0,
            msg: e2.message
          })
          return
        })
      }
    }).catch(e => {
      res.json({
        state: 0,
        msg: e.message
      })
      return
    })
})

// 首页获取总数接口
router.get('/getCount', function (req, res, next) {
  let count = 0
  postsModel.findCountByList().then(result => {
    count = result[0].listCount
    res.json({
      state: 1,
      count
    })
    return
  }).catch(e => {
    res.json({
      state: 0,
      msg: e.message
    })
    return
  })
})

// 首页获取全部内容接口
router.get('/getListAll', function (req, res, next) {
  const page = req.query.page || 1
  const size = req.query.size || 5
  let list = ''
  let obj = {page, size}
  postsModel.findListByLimit(obj)
    .then(result => {
      if (result) {
        list = result
        res.json({
          state: 1,
          list,
        })
        return
      }
    }).catch(e => {
      res.json({
        state: 0,
        msg: e.message
      })
      return
    })
})

router.get('/getArticle', function (req, res, next) {
  const id = req.query.id
  const obj = {id}
  postsModel.findArticleById(obj)
    .then(result => {
      res.json({
        state: 1,
        result: result[0]
      })
      return
    }).catch(e => {
      res.json({
        state: 0,
        msg: e.message
      })
      return
    })
})

router.post('/editArticle', function (req, res, next) {
  const title = req.body.title
  const content = req.body.content
  const types = req.body.types
  const id = req.body.id

  // 对于特殊字符双引号进行转义(解决数据库不能存双引号的问题)
  let newContent = content.replace(/["]/g, (target) => {
    return {
        '"': '&quot;',
    }[target]
  })
  let newTitle = title.replace(/["]/g, (target) => {
    return {
        '"': '&quot;',
    }[target]
  })
  const obj = {title: newTitle, content: newContent, types, id}
    // 校验参数
    try {
      if (!title) {
        throw new Error('标题不能为空')
      } else if (!content) {
        throw new Error('内容不能为空')
      } else {
        postsModel.updateArticleById(obj)
          .then(result => {
            if(result.affectedRows !== 0) {
              res.json({
                state: 1,
                msg: '编辑成功',
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

router.post('/deleteArticle', function (req, res, next) {
  const id = req.body.id
  const obj = {id}
  postsModel.deleteArticleById(obj)
    .then(result => {
      if(result.affectedRows !== 0) { 
        res.json({
          state: 1,
          cont: result
        })
        return
      }
    }).catch(e => {
      res.json({
        state: 0,
        msg: e.message
      })
      return
    })
})

// 首页打开页面修改pv
router.post('/addPv', function (req, res, next) {
  let pv = req.body.pv
  const id = req.body.id
  let obj = {
    id,
    pv: ++pv
  }
  postsModel.updataPvById(obj)
    .then(result => {
      if(result.affectedRows !== 0) { 
        res.json({
          state: 1,
          cont: result
        })
        return
      }
    }).catch(e => {
      res.json({
        state: 0,
        msg: e.message
      })
      return
    })
})

module.exports = router
