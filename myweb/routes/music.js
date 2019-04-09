var express = require('express');
var router = express.Router();
var axios = require('axios')
var Encrypt = require('../common/js/crypto')

function createWebAPIRequest(url, method, data, callback) {
  var cryptoreq = Encrypt(data)
  axios({
    url,
    method,
    data: {
      params: cryptoreq.params,
      encSecKey: cryptoreq.encSecKey
    },
    transformRequest: [function (datas) {
      // Do whatever you want to transform the data
      let ret = ''
      for (let it in datas) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(datas[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Accept': '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
      'Connection': 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Referer': 'http://music.163.com',
      'Host': 'music.163.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36'
    }
  }).then(res => {
    callback(res.data)
  }).catch(e => {
    callback(e)
  })
}

// 获取音乐url的方法
router.get('/url', function (req, res, next) {
  let id = req.query.id
  var data = {
    "ids": [id],
    "br": 999000,
    "csrf_token": ""
  }
  createWebAPIRequest(
    'https://music.163.com/weapi/song/enhance/player/url',
    'POST',
    data,
    function (r) {
      res.json(r)
      return;
    }
  )
})

// 获取音乐歌单的方法
router.get('/playlist/detail', function (req, res, next) {
  var id = req.query.id
  var data = {
    "id": id,
    "offset": 0,
    "total": true,
    "limit": 1000,
    "n": 1000,
    "csrf_token": ""
  }
  createWebAPIRequest('https://music.163.com/weapi/v3/playlist/detail', 'POST', data, function (r) {
    res.json(r)
    return;
  })
})

module.exports = router