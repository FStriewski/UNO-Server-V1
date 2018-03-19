var Sequelize = require('sequelize')
// DEFINE CONNECTION STRING TO LINK TO POSTGRES DATABASE:
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:secret@192.168.99.100:5432/postgres')

module.exports = sequelize
