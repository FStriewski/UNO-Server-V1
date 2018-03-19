const Sequelize = require('sequelize')
const sequelize = require('../db')

const Cards = sequelize.define('cards', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  plus: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
    tableName: 'cards',
  	timestamps: false
})

module.exports = Cards
