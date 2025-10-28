import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: 'red', textAlign: 'center' }}>RESUME BUILDER - WORKING!</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        {/* FORM SECTION */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '10px',
          border: '2px solid #4361ee'
        }}>
          <h3 style={{ color: '#4361ee' }}>Personal Information</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label><strong>First Name</strong></label>
            <input 
              type="text" 
              value={personalInfo.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #ddd', 
                borderRadius: '5px',
                marginTop: '0.5rem'
              }}
              placeholder="Enter first name"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label><strong>Last Name</strong></label>
            <input 
              type="text" 
              value={personalInfo.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #ddd', 
                borderRadius: '5px',
                marginTop: '0.5rem'
              }}
              placeholder="Enter last name"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label><strong>Email</strong></label>
            <input 
              type="email" 
              value={personalInfo.email}
              onChange={(e) => handleChange('email', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #ddd', 
                borderRadius: '5px',
                marginTop: '0.5rem'
              }}
              placeholder="Enter email"
            />
          </div>

          <button style={{ 
            background: '#4361ee', 
            color: 'white', 
            padding: '1rem 2rem', 
            border: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold',
            marginTop: '1rem',
            width: '100%'
          }}>
            Save Resume
          </button>
        </div>

        {/* PREVIEW SECTION */}
        <div style={{ 
          background: '#f8f9fa', 
          padding: '2rem', 
          borderRadius: '10px',
          border: '2px solid #28a745'
        }}>
          <h3 style={{ color: '#28a745' }}>Resume Preview</h3>
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            minHeight: '300px',
            border: '1px solid #ccc',
            marginTop: '1rem'
          }}>
            <h2 style={{ color: '#4361ee', marginBottom: '0.5rem' }}>
              {personalInfo.firstName} {personalInfo.lastName}
            </h2>
            <p><strong>Email:</strong> {personalInfo.email || 'Not provided'}</p>
            <p><strong>Phone:</strong> {personalInfo.phone || 'Not provided'}</p>
            <p><strong>Address:</strong> {personalInfo.address || 'Not provided'}</p>
            
            <div style={{ marginTop: '2rem' }}>
              <h4 style={{ color: '#4361ee', borderBottom: '1px solid #4361ee' }}>Education</h4>
              <p>Your education will appear here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

