'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Check if admin user already exists
    const [results] = await queryInterface.sequelize.query(
      "SELECT id FROM users WHERE email = 'admin@example.com' LIMIT 1;"
    );

    if (results.length > 0) {
      console.log('ℹ️ Admin user already exists. Skipping seeding.');
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Insert admin user
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
        is_active: true,
        created_at: new Date()
      }
    ]);

    console.log('Admin user seeded successfully.');
  },

  async down(queryInterface, Sequelize) {
    // Remove admin user
    await queryInterface.bulkDelete('users', {
      email: 'admin@example.com'
    });
  }
};

