var express = require('express');
var router = express.Router();
var friendModel = require('../lib/mysqlc')

// 写入友情链接接口
router.post('/writeFriend', function (req, res, next) {
  const friend_name = req.body.friend_name
  const images_link = req.body.images_link
  const address_link = req.body.address_link
  try {
    if (!friend_name) {
      throw new Error('友链名字不能为空')
    } else if (!images_link) {
      throw new Error('友链头像地址不能为空')
    } else if (!address_link) {
      throw new Error('友链地址不能为空')
    } else {
      const obj = {friend_name, images_link, address_link}
      friendModel.writeFriend(obj)
        .then(result => {
          if(result.affectedRows !== 0) {
            res.json({
              state: 1,
              msg: '友链信息写入成功',
              cont: result
            })
            return
          }
        }).catch (err => {
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

router.get('/getFriendList', function (req, res, next) {
  let list = []
  friendModel.selectFriendList()
    .then(result => {
      if (result) {
        list = result
        res.json({
          state: 1,
          list
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

router.get('/getFriendContent', function (req, res, next) {
  let id = req.query.id
  const obj = {id}
  friendModel.selectFriendById(obj)
    .then(result => {
      if (result) {
        res.json({
          state: 1,
          cont: result[0]
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