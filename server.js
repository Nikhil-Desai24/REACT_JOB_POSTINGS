





import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint to serve JSON data
app.get('/api/jobs', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'jobs.json'));
});

// Catch-all route to serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
