const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const { sequelize } = require('./models');

app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).send('OK');
  } catch (err) {
    console.error('HEALTH CHECK ERROR:', err);
    res.status(503).send('DB not ready');
  }
});

app.get('/live', (req, res) => {
  res.status(200).send('ALIVE');
});

console.log('NODE_ENV:', process.env.NODE_ENV);

// Export the configured app
module.exports = app;

