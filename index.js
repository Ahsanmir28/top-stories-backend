const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000; 
const API_KEY = 'GotrhmhEBQAPKGVJNKru51JdPkWJsftf';

app.use(cors());

app.get('/top-stories', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    const topStories = response.data.results;
    res.json(topStories);
  } catch (error) {
    console.error('Error fetching top stories:', error);
    res.status(500).json({ error: 'top stories not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
