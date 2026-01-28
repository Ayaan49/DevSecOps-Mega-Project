
// models/user.model.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      role: {
        type: DataTypes.ENUM('admin', 'viewer'),
        allowNull: false,
        defaultValue: 'viewer',
      },

      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false,
    }
  );

  return User;
};
