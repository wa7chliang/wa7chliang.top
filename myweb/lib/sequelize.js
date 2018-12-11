const Sequelize = require('sequelize')
const init = require('../config')

exports.SEQUELIZE = new Sequelize(init.database, init.user, init.password, {
  host: init.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})