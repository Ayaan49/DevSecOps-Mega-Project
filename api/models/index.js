// models/index.js

const sequelize = require('../db/orm');
const UserModel = require('./user.model');

const User = UserModel(sequelize);

module.exports = {
  sequelize,
  User,
};
