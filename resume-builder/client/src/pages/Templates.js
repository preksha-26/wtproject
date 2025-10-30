import React from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'Classic',
      description: 'Professional and traditional layout',
      style: 'classic',
      layout: 'single-column',
      color: '#2c3e50'
    },
    {
      id: 2,
      name: 'Modern',
      description: 'Clean contemporary design with sidebar',
      style: 'modern',
      layout: 'two-column',
      color: '#4361ee'
    },
    {
      id: 3,
      name: 'Creative',
      description: 'Bold design for creative professionals',
      style: 'creative',
      layout: 'centered',
      color: '#f72585'
    },
    {
      id: 4,
      name: 'Executive',
      description: 'Formal layout for senior positions',
      style: 'executive',
      layout: 'two-column',
      color: '#1a936f'
    },
    {
      id: 5,
      name: 'Minimal',
      description: 'Simple and elegant design',
      style: 'minimal',
      layout: 'single-column',
      color: '#6c757d'
    },
    {
      id: 6,
      name: 'Technical',
      description: 'Structured layout for technical roles',
      style: 'technical',
      layout: 'two-column',
      color: '#f8961e'
    }
  ];

  const renderTemplatePreview = (template) => {
    switch(template.style) {
      case 'classic':
        return (
          <div style={{
            border: '2px solid #2c3e50',
            padding: '1rem',
            height: '200px',
            background: 'white',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ borderBottom: '2px solid #2c3e50', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>
                JOHN DOE
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flex: 1 }}>
              <div style={{ flex: 1, borderRight: '1px solid #e9ecef', paddingRight: '0.5rem' }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.25rem' }}>PROFILE</div>
                <div style={{ fontSize: '10px', background: '#f8f9fa', height: '30px', marginBottom: '0.5rem' }}></div>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.25rem' }}>EDUCATION</div>
                <div style={{ fontSize: '10px', background: '#f8f9fa', height: '40px', marginBottom: '0.5rem' }}></div>
              </div>
              <div style={{ flex: 2 }}>
                <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.25rem' }}>EXPERIENCE</div>
                <div style={{ fontSize: '10px', background: '#f8f9fa', height: '80px', marginBottom: '0.5rem' }}></div>
              </div>
            </div>
          </div>
        );

      case 'modern':
        return (
          <div style={{
            border: '2px solid #4361ee',
            padding: '1rem',
            height: '200px',
            background: 'white',
            display: 'flex'
          }}>
            <div style={{ 
              flex: 1, 
              background: '#4361ee', 
              color: 'white',
              padding: '0.5rem',
              marginRight: '0.5rem'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.5rem' }}>CONTACT</div>
              <div style={{ fontSize: '10px', height: '40px', background: 'rgba(255,255,255,0.2)', marginBottom: '0.5rem' }}></div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.5rem' }}>SKILLS</div>
              <div style={{ fontSize: '10px', height: '60px', background: 'rgba(255,255,255,0.2)' }}></div>
            </div>
            <div style={{ flex: 2, padding: '0.5rem' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#4361ee', marginBottom: '0.5rem' }}>JOHN DOE</div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.25rem' }}>EXPERIENCE</div>
              <div style={{ fontSize: '10px', background: '#f8f9fa', height: '50px', marginBottom: '0.5rem' }}></div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.25rem' }}>EDUCATION</div>
              <div style={{ fontSize: '10px', background: '#f8f9fa', height: '30px' }}></div>
            </div>
          </div>
        );

      case 'creative':
        return (
          <div style={{
            border: '2px solid #f72585',
            padding: '1rem',
            height: '200px',
            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '20px',
              height: '100%',
              background: '#f72585'
            }}></div>
            <div style={{ paddingLeft: '1.5rem' }}>
              <div style={{ 
                fontSize: '14px', 
                fontWeight: 'bold', 
                color: '#f72585',
                borderBottom: '2px solid #f72585',
                paddingBottom: '0.25rem',
                marginBottom: '0.5rem'
              }}>
                JOHN DOE
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#f72585', marginBottom: '0.25rem' }}>PROJECTS</div>
                  <div style={{ fontSize: '8px', background: 'rgba(247, 37, 133, 0.1)', height: '40px', marginBottom: '0.5rem' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#f72585', marginBottom: '0.25rem' }}>SKILLS</div>
                  <div style={{ fontSize: '8px', background: 'rgba(247, 37, 133, 0.1)', height: '40px' }}></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'executive':
        return (
          <div style={{
            border: '2px solid #1a936f',
            padding: '1rem',
            height: '200px',
            background: 'white',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              textAlign: 'center',
              borderBottom: '1px solid #1a936f',
              paddingBottom: '0.5rem',
              marginBottom: '0.5rem'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1a936f' }}>JOHN A. DOE</div>
              <div style={{ fontSize: '10px', color: '#6c757d' }}>SENIOR EXECUTIVE</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', flex: 1 }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.25rem' }}>CAREER SUMMARY</div>
                <div style={{ fontSize: '9px', background: '#f8f9fa', height: '50px', marginBottom: '0.5rem' }}></div>
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.25rem' }}>ACHIEVEMENTS</div>
                <div style={{ fontSize: '9px', background: '#f8f9fa', height: '50px' }}></div>
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div style={{
            border: '1px solid #6c757d',
            padding: '1rem',
            height: '200px',
            background: 'white'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#6c757d' }}>John Doe</div>
            </div>
            <div style={{ borderTop: '1px solid #6c757d', paddingTop: '0.5rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.25rem' }}>Experience</div>
              <div style={{ fontSize: '9px', background: '#f8f9fa', height: '30px', marginBottom: '0.5rem' }}></div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.25rem' }}>Education</div>
              <div style={{ fontSize: '9px', background: '#f8f9fa', height: '30px', marginBottom: '0.5rem' }}></div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div style={{
            border: '2px solid #f8961e',
            padding: '1rem',
            height: '200px',
            background: 'white',
            display: 'flex'
          }}>
            <div style={{ flex: 1, borderRight: '1px solid #f8961e', paddingRight: '0.5rem' }}>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#f8961e', marginBottom: '0.25rem' }}>TECH SKILLS</div>
              <div style={{ fontSize: '10px', background: '#fff3e0', height: '60px', marginBottom: '0.5rem' }}></div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#f8961e', marginBottom: '0.25rem' }}>CERTIFICATIONS</div>
              <div style={{ fontSize: '10px', background: '#fff3e0', height: '40px' }}></div>
            </div>
            <div style={{ flex: 2, paddingLeft: '0.5rem' }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#f8961e', marginBottom: '0.5rem' }}>JOHN DOE</div>
              <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '0.25rem' }}>PROJECTS</div>
              <div style={{ fontSize: '10px', background: '#f8f9fa', height: '70px', marginBottom: '0.5rem' }}></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      minHeight: '100vh',
      background: '#f8f9fa'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: '#4361ee', marginBottom: '1rem' }}>Choose Your Resume Template</h1>
        <p style={{ color: '#6c757d', fontSize: '1.1rem' }}>
          Select from professionally designed templates. Each template offers unique layouts and styling options.
        </p>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem' 
      }}>
        {templates.map(template => (
          <div key={template.id} style={{ 
            background: 'white', 
            padding: '1.5rem', 
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer',
            border: `2px solid ${template.color}20`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          }}>
            {/* Template Preview */}
            {renderTemplatePreview(template)}
            
            {/* Template Info */}
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <h3 style={{ 
                color: template.color, 
                marginBottom: '0.5rem',
                fontSize: '1.2rem'
              }}>
                {template.name}
              </h3>
              <p style={{ 
                color: '#6c757d', 
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                {template.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1rem',
                fontSize: '0.8rem',
                color: '#6c757d'
              }}>
                <span>Layout: <strong>{template.layout}</strong></span>
                <span>Style: <strong>{template.style}</strong></span>
              </div>
              
              <Link to="/builder" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  background: template.color, 
                  color: 'white', 
                  padding: '0.75rem 1.5rem', 
                  border: 'none', 
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = template.color;
                  e.target.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = template.color;
                  e.target.style.opacity = '1';
                }}>
                  Use {template.name} Template
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Template Features Section */}
      <div style={{ 
        marginTop: '4rem', 
        padding: '2rem', 
        background: 'white', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#4361ee', marginBottom: '2rem' }}>
          Template Features
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
            <h4 style={{ color: '#4361ee' }}>Multiple Layouts</h4>
            <p style={{ color: '#6c757d' }}>Single column, two columns, and centered layouts</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
            <h4 style={{ color: '#4361ee' }}>Professional Designs</h4>
            <p style={{ color: '#6c757d' }}>Carefully crafted for different industries and roles</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
            <h4 style={{ color: '#4361ee' }}>Mobile Friendly</h4>
            <p style={{ color: '#6c757d' }}>All templates work perfectly on any device</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💾</div>
            <h4 style={{ color: '#4361ee' }}>Easy Export</h4>
            <p style={{ color: '#6c757d' }}>Download as PDF with one click</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;