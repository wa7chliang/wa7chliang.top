var express = require('express')
var router = express.Router()
var svgCaptcha = require('svg-captcha')

router.get('/', function (req, res, next) {
  let captcha = svgCaptcha.create()
  req.session.captcha = captcha.text.toUpperCase()
  res.type('svg')
  res.status(200).send(captcha.data)
})

module.exports = router;
