const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3001;

// Beefree credentials - Loaded from .env file
const BEE_CLIENT_ID = process.env.BEE_CLIENT_ID;
const BEE_CLIENT_SECRET = process.env.BEE_CLIENT_SECRET;
const BEE_API_KEY = process.env.BEE_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.text({ 
  type: 'text/html',
  limit: '50mb'
}));
app.use(express.static(path.join(__dirname)));

// Beefree Auth V2 endpoint
app.post('/proxy/bee-auth', async (req, res) => {
  try {
    const { uid } = req.body;
    
    const response = await axios.post(
      'https://auth.getbee.io/loginV2',
      {
        client_id: BEE_CLIENT_ID,
        client_secret: BEE_CLIENT_SECRET,
        uid: uid || 'marketing-buddy-user'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    res.json(response.data);
  } catch (error) {
    console.error('Auth error:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Failed to authenticate with Beefree',
      details: error.response?.data || error.message
    });
  }
});

// HTML to JSON conversion endpoint
app.post('/proxy/html-to-json', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.getbee.io/v1/conversion/html-to-json',
      req.body,
      {
        headers: {
          'Content-Type': 'text/html',
          'Authorization': `Bearer ${BEE_API_KEY}`
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ error: 'Failed to convert HTML to JSON' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log('⚠️  Remember to update BEE_CLIENT_ID, BEE_CLIENT_SECRET, and BEE_API_KEY with your actual credentials');
});