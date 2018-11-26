var conn = require('./conn')

let query = ( sql, options ) => {
  return new Promise(( resolve, reject ) => {
    conn.conn(function (connection) {
      connection.query(sql, options || [], function (err, result) {
        if ( err ) {
          reject( err )
        } else {
          resolve( result )
        }
      })
      connection.end()
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
  let _sql = `INSERT INTO users(username,password) VALUES("${obj.username}","${obj.password}");`
  return query(_sql)
}

// 将文章写入数据库
let writeArticle = ( obj ) => {
  let _sql = `INSERT INTO posts(title,content,moment,types) VALUES(?, ?, ?, ?);`
  let options = [obj.title, obj.content, obj.moment, obj.types]
  return query(_sql, options)
}

// 分页查询文章名称
let findTitleListByLimit = ( obj ) => {
  let _sql = `select id,title,moment,pv,types from posts ORDER BY moment DESC limit ${(obj.page-1)*obj.size},${obj.size};`
  return query(_sql)
}

// 分页查询所有文章列表
let findListByLimit = ( obj ) => {
  let _sql = `select * from posts ORDER BY moment DESC limit ${(obj.page-1)*obj.size},${obj.size};`
  return query(_sql)
}

// 查询文章列表总数
let findCountByList = () => {
  let _sql = `select count(*) AS listCount from posts` //查询总数并命名为listCount
  return query(_sql)
}

// 根据id查询文章内容
let findArticleById = ( obj ) => {
  let _sql = `select * from posts where id="${obj.id}";`
  return query(_sql)
}

// 根据id修改文章内容
let updateArticleById = ( obj ) => {
  let _sql = `UPDATE posts SET title=?,content=?,types=? WHERE id=?;`
  let options = [obj.title, obj.content, obj.types, obj.id]  
  return query(_sql, options)
}

// 根据id增加pv
let updataPvById = ( obj ) => {
  let _sql = `UPDATE posts SET pv="${obj.pv}" WHERE id="${obj.id}";`
  return query(_sql)
}

// 根据id删除文章
let deleteArticleById = ( obj ) => {
  let _sql = `delete from posts where id="${obj.id}";`
  return query(_sql)
}

// 将友链写入数据库
let writeFriend = ( obj ) => {
  let _sql = `INSERT INTO friend(friend_name,images_link,address_link) VALUES("${obj.friend_name}","${obj.images_link}","${obj.address_link}");`
  return query(_sql)
}

// 查找所有的友链列表
let selectFriendList = () => {
  let _sql = `select * from friend;`
  return query(_sql)
}

// 通过id查找友链内容
let selectFriendById = ( obj ) => {
  let _sql = `select * from friend where id="${obj.id}";`
  return query(_sql)
}

// 通过id修改友链内容
let updataFriendById = ( obj ) => {
  let _sql = `UPDATE friend SET friend_name="${obj.friend_name}",images_link="${obj.images_link}",address_link="${obj.address_link}" WHERE id="${obj.id}";`
  return query(_sql)
}

// 通过id删除友链内容
let deleteFriendById = ( obj ) => {
  let _sql = `delete from friend where id="${obj.id}";`
  return query(_sql)
}

module.exports = {
  findDataByUserName,
  writeDataByUser,
  writeArticle,
  findTitleListByLimit,
  findCountByList,
  findArticleById,
  updateArticleById,
  deleteArticleById,
  findListByLimit,
  updataPvById,
  writeFriend,
  selectFriendList,
  selectFriendById,
  updataFriendById,
  deleteFriendById
}