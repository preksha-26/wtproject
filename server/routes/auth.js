const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working!' });
});

// Register - SIMPLE VERSION (no database)
router.post('/register', async (req, res) => {
  try {
    console.log('📝 Registration attempt:', req.body);
    
    const { firstName, lastName, email, password } = req.body;

    // Simple validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ 
        message: 'All fields are required'
      });
    }

    // Create demo user (without database)
    const demoUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      createdAt: new Date().toISOString()
    };

    // Generate token
    const token = jwt.sign(
      { userId: demoUser.id },
      process.env.JWT_SECRET || 'demo-secret-key-123',
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: demoUser
    });
    
  } catch (error) {
    console.error('❌ Registration error:', error);
    res.status(500).json({ 
      message: 'Registration failed',
      error: error.message
    });
  }
});

// Login - SIMPLE VERSION (no database)
router.post('/login', async (req, res) => {
  try {
    console.log('🔐 Login attempt:', { email: req.body.email });
    
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Demo user
    const demoUser = {
      id: Date.now().toString(),
      firstName: 'Demo',
      lastName: 'User',
      email: email,
      createdAt: new Date().toISOString()
    };

    const token = jwt.sign(
      { userId: demoUser.id },
      process.env.JWT_SECRET || 'demo-secret-key-123',
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: demoUser
    });
    
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ 
      message: 'Login failed',
      error: error.message 
    });
  }
});

module.exports = router;