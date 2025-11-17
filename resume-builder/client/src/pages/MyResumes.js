import React from 'react';
import { Link } from 'react-router-dom';

const MyResumes = () => {
  // For demo purposes - in real app, this would come from backend
  const resumes = [];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
      <h1 style={{ color: '#4361ee', marginBottom: '2rem' }}>My Resumes</h1>
      
      {resumes.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {resumes.map(resume => (
            <div key={resume.id} style={{ 
              background: 'white', 
              borderRadius: '10px', 
              padding: '1.5rem', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #4361ee'
            }}>
              <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>{resume.title}</h3>
              <p style={{ color: '#6c757d', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Last modified: {resume.lastModified}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Link to={`/builder?resumeId=${resume.id}`}>
                  <button style={{ 
                    background: '#4361ee', 
                    color: 'white', 
                    padding: '0.5rem 1rem', 
                    border: 'none', 
                    borderRadius: '5px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}>
                    Edit
                  </button>
                </Link>
                <button style={{ 
                  background: 'transparent', 
                  color: '#4361ee', 
                  padding: '0.5rem 1rem', 
                  border: '1px solid #4361ee', 
                  borderRadius: '5px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}>
                  Download
                </button>
                <button style={{ 
                  background: 'transparent', 
                  color: '#dc3545', 
                  padding: '0.5rem 1rem', 
                  border: '1px solid #dc3545', 
                  borderRadius: '5px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem', 
          color: '#6c757d' 
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>No resumes yet</h3>
          <p>Create your first resume to get started!</p>
          <Link to="/builder">
            <button style={{ 
              background: '#4361ee', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              border: 'none', 
              borderRadius: '5px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Create Resume
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyResumes;