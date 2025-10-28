const express = require('express');
const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Resumes route is working!' });
});

// Get all resumes
router.get('/', (req, res) => {
  res.json({ 
    message: 'Get all resumes',
    resumes: [] 
  });
});

// Create new resume
router.post('/', (req, res) => {
  const resumeData = req.body;
  
  res.status(201).json({
    message: 'Resume created successfully',
    resume: {
      id: Date.now(),
      ...resumeData,
      createdAt: new Date().toISOString()
    }
  });
});

// Update resume
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const resumeData = req.body;
  
  res.json({
    message: 'Resume updated successfully',
    resume: {
      id,
      ...resumeData,
      updatedAt: new Date().toISOString()
    }
  });
});

module.exports = router;