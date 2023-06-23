const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the single page
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});