const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: {
      ssl: dbConfig.ssl
    },
    logging: false
  }
);

module.exports = sequelize;
