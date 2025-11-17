import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../utils/api';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    console.log('🔄 Login attempt started...');
    
    try {
      const response = await authAPI.login(formData);
      console.log('✅ Login successful:', response.data);
      
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      console.log('📦 Token stored in localStorage');
      
      // Update the App's authentication state
      if (setIsLoggedIn) {
        setIsLoggedIn(true);
        console.log('✅ App auth state updated to: logged in');
      }
      
      // Redirect to home page
      navigate('/home');
      console.log('🔄 Redirected to /home');
      
    } catch (error) {
      console.error('❌ Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
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
          Welcome Back!
        </h2>
        
        {error && (
          <div style={{ 
            background: '#ffe6e6', 
            color: '#d63031', 
            padding: '0.75rem', 
            borderRadius: '5px',
            marginBottom: '1rem',
            border: '1px solid #ff7675'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="Enter your email"
              required
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="Enter your password"
              required
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              background: '#4361ee', 
              color: 'white', 
              padding: '0.75rem', 
              border: 'none', 
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              opacity: loading ? 0.7 : 1
            }}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#6c757d' }}>
          Don't have an account?{' '}
          <a 
            href="/register" 
            style={{ color: '#4361ee', fontWeight: 'bold', textDecoration: 'none' }}
          >
            Sign up here
          </a>
        </p>
        
        {/* Demo credentials notice */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem', 
          background: '#e7f3ff', 
          borderRadius: '5px',
          border: '1px solid #b3d9ff',
          fontSize: '0.9rem',
          color: '#0066cc'
        }}>
          <strong>Demo:</strong> Use any email and password to test login
        </div>
      </div>
    </div>
  );
};

export default Login;