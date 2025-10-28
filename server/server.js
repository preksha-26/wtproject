const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// SQLite Database Connection
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Resume Builder API is running with SQLite!' });
});

// Test database route
app.get('/api/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ 
      message: 'SQLite Database connected successfully!',
      database: 'SQLite (no installation required)'
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Database connection failed',
      error: error.message 
    });
  }
});

// Simple auth route (without database for now)
app.post('/api/auth/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  res.json({ 
    message: 'User registered successfully (demo)',
    user: { firstName, lastName, email }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  res.json({ 
    message: 'Login successful (demo)',
    user: { email }
  });
});

// Simple resumes route
app.get('/api/resumes', (req, res) => {
  res.json({ 
    message: 'Get all resumes (demo)',
    resumes: [] 
  });
});

app.post('/api/resumes', (req, res) => {
  res.json({ 
    message: 'Resume created successfully (demo)',
    resume: req.body 
  });
});

// Initialize database and start server
const PORT = 5000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('SQLite Database connected successfully!');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log('Database: SQLite (no installation required)');
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
}

startServer();