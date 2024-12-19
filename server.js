







const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve React frontend
app.use(express.static(path.join(__dirname, 'dist'))); // Assuming your React build files are in "dist"

// JSON Server setup
const apiRouter = jsonServer.router(path.join(__dirname, 'src', 'jobs.json')); // Path to jobs.json
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, apiRouter);

// Handle React routing, return index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Adjust "dist" to your build folder
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
