var conn = require('./conn')

let query = ( sql ) => {
  return new Promise(( resolve, reject ) => {
    conn.conn(function (connection) {
      connection.query(sql, function (err, result) {
        if ( err ) {
          reject( err )
        } else {
          resolve( result )
        }
      })
    })
  })
}

// 通过名字查找用户
let findDataByUserName =  ( name ) => {
  let _sql = `select * from users where username="${name}";`
  return query(_sql)
}

// 将注册账号写入数据库
let writeDataByUser = ( obj ) => {
  let _sql = `INSERT INTO users(username,password) VALUES("${obj.name}","${obj.password}");`
  return query(_sql)
}

module.exports = {
  findDataByUserName,
  writeDataByUser
}