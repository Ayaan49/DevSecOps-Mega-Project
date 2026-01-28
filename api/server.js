require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`)
})

server.on('error', (err) => {
  console.error('Server failed to start:', err)
  process.exit(1)
})
