const {Sequelize} = require('sequelize')

module.exports = new Sequelize('mysql://root:rootroot@localhost:3306/fapr_db')
