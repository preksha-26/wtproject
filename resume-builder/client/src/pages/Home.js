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
          Welcome to Resume Builder
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
          Create professional resumes in minutes. Choose from templates, build your resume, and download as PDF.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/builder" style={{ textDecoration: 'none' }}>
            <button style={{ 
              background: 'white',
              color: '#4361ee',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Create Resume
            </button>
          </Link>
          <Link to="/templates" style={{ textDecoration: 'none' }}>
            <button style={{ 
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              border: '2px solid white',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              View Templates
            </button>
          </Link>
        </div>

        {/* Quick Stats Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem', 
          marginTop: '4rem',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>5+</div>
            <div>Professional Templates</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>PDF</div>
            <div>Instant Download</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>100%</div>
            <div>Free to Use</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;