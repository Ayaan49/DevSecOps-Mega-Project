'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Create users table
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },

      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING(255),
        allowNull: false
      },

      role: {
        type: Sequelize.ENUM('admin', 'viewer'),
        allowNull: false,
        defaultValue: 'viewer'
      },

      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    // Drop users table
    await queryInterface.dropTable('users');
  }
};

