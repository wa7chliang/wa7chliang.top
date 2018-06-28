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
  let _sql = `INSERT INTO users(username,password) VALUES("${obj.username}","${obj.password}");`
  return query(_sql)
}

// 将文章写入数据库
let writeArticle = ( obj ) => {
  let _sql = `INSERT INTO posts(title,content,moment,types) VALUES("${obj.title}","${obj.content}","${obj.moment}","${obj.types}");`
  return query(_sql)
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
  let _sql = `UPDATE posts SET title="${obj.title}",content="${obj.content}",types="${obj.types}" WHERE id="${obj.id}";`
  return query(_sql)
}

// 根据id删除文章
let deleteArticleById = ( obj ) => {
  let _sql = `delete from posts where id="${obj.id}";`
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
  findListByLimit
}