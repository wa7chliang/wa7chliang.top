const Sequelize = require('sequelize')
const sequelize = require('../../lib/sequelize').SEQUELIZE

const userControl = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  state: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    defaultValue: 0
  }
}, {
  'createdAt': false,
  'updatedAt': false
})

exports.findDataByUserName = (username) => {
  return userControl.findAll({
    where: {
      username: username
    }
  })
}

exports.writeDataByUser = (obj) => {
  return userControl.create({
    username: obj.username,
    password: obj.password
  })
}