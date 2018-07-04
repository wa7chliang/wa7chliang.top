var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');

var indexRouter = require('./routes/index');
var users = require('./routes/users');
var captcha = require('./routes/captcha')
var posts = require('./routes/posts')
var friend = require('./routes/friend')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use('/public', express.static('public'))

app.use(session({
  'secret': 'myweb',  
  'cookie': {
    'maxAge': 900000
  },
  'name': 'myweb',
  resave: true,  // 新增
  saveUninitialized: false  // 新增
}));

app.use('/', indexRouter);
app.use('/api/users', users);
app.use('/api/captcha', captcha)
app.use('/api/posts', posts)
app.use('/api/friend', friend)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).sendfile('index.html')
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
