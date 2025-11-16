const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/resume-builder';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  console.log('📊 Database: resume-builder');
})
.catch(err => {
  console.log('❌ MongoDB connection error:', err);
});

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Resume Builder API is running!',
    database: 'MongoDB',
    status: 'Connected'
  });
});

// Test database route
app.get('/api/test-db', async (req, res) => {
  try {
    const dbState = mongoose.connection.readyState;
    const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
    
    res.json({ 
      message: 'MongoDB connection test',
      connectionState: states[dbState],
      connected: dbState === 1,
      database: 'resume-builder'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Import and use routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/resumes', require('./routes/resumes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}`);
});