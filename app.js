const express = require('express');
const app = express();
const PORT = 3000;

// Simple GET route
app.get('/', (req, res) => {
  res.send('CI/CD Github Action with Express.js and Docker!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

