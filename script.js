const express = require('express')
const app = express()
const port = 3000 // You can change this port if needed

// Serve static files from the "public" directory
app.use(express.static('public'))

// Define a route to render the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

