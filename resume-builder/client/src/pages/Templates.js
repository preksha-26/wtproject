import React from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
  const templates = [
    { id: 1, name: 'Classic', description: 'Clean and professional design' },
    { id: 2, name: 'Modern', description: 'Contemporary layout with bold sections' },
    { id: 3, name: 'Creative', description: 'Perfect for designers and creatives' },
    { id: 4, name: 'Executive', description: 'Formal design for senior positions' }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#4361ee', textAlign: 'center', marginBottom: '1rem' }}>Resume Templates</h1>
      <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '2rem' }}>
        Choose from our professionally designed templates
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {templates.map(template => (
          <div key={template.id} style={{ 
            background: 'white', 
            padding: '2rem', 
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#4361ee', marginBottom: '1rem' }}>{template.name}</h3>
            <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>{template.description}</p>
            <Link to="/builder">
              <button style={{ 
                background: '#4361ee', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                border: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
                Use This Template
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;