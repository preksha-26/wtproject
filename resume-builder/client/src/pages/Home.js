import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Create Professional Resumes
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
          Build your perfect resume with our easy-to-use builder. Download in PDF format.
        </p>
        <div>
          <Link to="/builder">
            <button style={{ 
              background: 'white',
              color: '#4361ee',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              margin: '0 0.5rem'
            }}>
              Create Resume
            </button>
          </Link>
          <Link to="/templates">
            <button style={{ 
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              border: '2px solid white',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              margin: '0 0.5rem'
            }}>
              View Templates
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;