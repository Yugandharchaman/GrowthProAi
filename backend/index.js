const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why NAME is LOCATION's Sweetest Spot in 2025",
  "Discover How NAME Is Transforming LOCATION's Local Scene",
  "The Secret Behind NAME’s 5-Star Buzz in LOCATION",
  "How NAME Became LOCATION’s Favorite in 2025",
  "Explore Why Everyone in LOCATION Loves NAME"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('NAME', name)
    .replace('LOCATION', location);

  const simulatedData = {
    rating: (4 + Math.random()).toFixed(1), 
    reviews: Math.floor(Math.random() * 500) + 50,
    headline: randomHeadline
  };

  res.json(simulatedData);
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  const newHeadline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('NAME', name)
    .replace('LOCATION', location);

  res.json({ headline: newHeadline });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
