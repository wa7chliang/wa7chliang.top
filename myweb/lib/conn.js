const mysql = require('mysql')
const init = require('../config')

var db = {}

db.conn = function (cb) { 
  var connection = mysql.createConnection({
    host     : init.host,
    user     : init.user,
    password : init.password,
    database : init.database
  })
  connection.connect()
  cb(connection)
}

module.exports = db