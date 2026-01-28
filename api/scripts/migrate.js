'use strict';

const { execSync } = require('child_process');

function run(command) {
  console.log(`\n▶ Running: ${command}\n`);
  execSync(command, { stdio: 'inherit' });
}

async function migrate() {
  try {
    console.log('🚀 Starting database migration process...\n');

    // Run database migrations
    run('npx sequelize-cli db:migrate');

    // Run database seeders
    run('npx sequelize-cli db:seed:all');

    console.log('\n✅ Database migration and seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Database migration failed.');
    console.error(error.message);
    process.exit(1);
  }
}

migrate();

