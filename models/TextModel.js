// models/TextData.js
const { DataTypes } = require('sequelize');
const sequelize = require('../service/db');

const TextData = sequelize.define('TextData', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// 自動建立資料表
TextData.sync();

module.exports = TextData;
