// db.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

console.log('DB URL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('PostgreSQL 連接成功'))
  .catch((err) => console.error('PostgreSQL 連接錯誤：', err));

module.exports = sequelize;
