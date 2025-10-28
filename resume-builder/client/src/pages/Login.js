import React from 'react';

const Login = () => {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{ 
        background: 'white', 
        padding: '3rem', 
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', color: '#4361ee', marginBottom: '2rem' }}>
          Login to Your Account
        </h2>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Email Address
          </label>
          <input 
            type="email" 
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '2px solid #e9ecef', 
              borderRadius: '5px' 
            }}
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Password
          </label>
          <input 
            type="password" 
            style={{ 
              width: '100%', 
              padding: '0.75rem', 
              border: '2px solid #e9ecef', 
              borderRadius: '5px' 
            }}
            placeholder="Enter your password"
          />
        </div>
        <button style={{ 
          width: '100%', 
          background: '#4361ee', 
          color: 'white', 
          padding: '0.75rem', 
          border: 'none', 
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          Login
        </button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Don't have an account? <a href="/register" style={{ color: '#4361ee' }}>Register here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
