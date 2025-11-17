import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Templates.css'; // We'll create this CSS file

const Templates = () => {
  const navigate = useNavigate();
  
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

  const handleTemplateSelect = (template) => {
    console.log('Selected template:', template);
    
    // Store the selected template in localStorage
    localStorage.setItem('selectedTemplate', JSON.stringify(template));
    
    // Navigate to builder with template state
    navigate('/builder', { 
      state: { 
        selectedTemplate: template 
      } 
    });
  };

  const renderTemplatePreview = (template) => {
    switch(template.style) {
      case 'classic':
        return (
          <div className="preview-container classic-preview">
            <div className="preview-header">
              <div className="name">JOHN DOE</div>
            </div>
            <div className="preview-content">
              <div className="left-column">
                <div className="section-title">PROFILE</div>
                <div className="content-placeholder"></div>
                <div className="section-title">EDUCATION</div>
                <div className="content-placeholder large"></div>
              </div>
              <div className="right-column">
                <div className="section-title">EXPERIENCE</div>
                <div className="content-placeholder x-large"></div>
              </div>
            </div>
          </div>
        );

      case 'modern':
        return (
          <div className="preview-container modern-preview">
            <div className="sidebar">
              <div className="section-title">CONTACT</div>
              <div className="content-placeholder"></div>
              <div className="section-title">SKILLS</div>
              <div className="content-placeholder large"></div>
            </div>
            <div className="main-content">
              <div className="name modern-name">JOHN DOE</div>
              <div className="section-title">EXPERIENCE</div>
              <div className="content-placeholder"></div>
              <div className="section-title">EDUCATION</div>
              <div className="content-placeholder"></div>
            </div>
          </div>
        );

      case 'creative':
        return (
          <div className="preview-container creative-preview">
            <div className="accent-bar"></div>
            <div className="creative-content">
              <div className="name creative-name">JOHN DOE</div>
              <div className="sections-row">
                <div className="section">
                  <div className="section-title">PROJECTS</div>
                  <div className="content-placeholder creative"></div>
                </div>
                <div className="section">
                  <div className="section-title">SKILLS</div>
                  <div className="content-placeholder creative"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'executive':
        return (
          <div className="preview-container executive-preview">
            <div className="executive-header">
              <div className="name executive-name">JOHN A. DOE</div>
              <div className="title">SENIOR EXECUTIVE</div>
            </div>
            <div className="executive-grid">
              <div className="grid-item">
                <div className="section-title">CAREER SUMMARY</div>
                <div className="content-placeholder"></div>
              </div>
              <div className="grid-item">
                <div className="section-title">ACHIEVEMENTS</div>
                <div className="content-placeholder"></div>
              </div>
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div className="preview-container minimal-preview">
            <div className="minimal-header">
              <div className="name minimal-name">John Doe</div>
            </div>
            <div className="minimal-content">
              <div className="section-title">Experience</div>
              <div className="content-placeholder"></div>
              <div className="section-title">Education</div>
              <div className="content-placeholder"></div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="preview-container technical-preview">
            <div className="tech-sidebar">
              <div className="section-title">TECH SKILLS</div>
              <div className="content-placeholder tech"></div>
              <div className="section-title">CERTIFICATIONS</div>
              <div className="content-placeholder tech"></div>
            </div>
            <div className="tech-main">
              <div className="name tech-name">JOHN DOE</div>
              <div className="section-title">PROJECTS</div>
              <div className="content-placeholder large"></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="templates-page">
      <div className="templates-header">
        <h1>Choose Your Resume Template</h1>
        <p>
          Select from professionally designed templates. Each template offers unique layouts and styling options.
        </p>
      </div>
      
      <div className="templates-grid">
        {templates.map(template => (
          <div 
            key={template.id} 
            className="template-card"
            onClick={() => handleTemplateSelect(template)}
          >
            {/* Template Preview */}
            {renderTemplatePreview(template)}
            
            {/* Template Info */}
            <div className="template-info">
              <h3 style={{ color: template.color }}>
                {template.name}
              </h3>
              <p className="template-description">
                {template.description}
              </p>
              
              <div className="template-meta">
                <span>Layout: <strong>{template.layout}</strong></span>
                <span>Style: <strong>{template.style}</strong></span>
              </div>
              
              <button 
                className="use-template-btn"
                style={{ backgroundColor: template.color }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTemplateSelect(template);
                }}
              >
                Use {template.name} Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Template Features Section */}
      <div className="features-section">
        <h2>Template Features</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">📄</div>
            <h4>Multiple Layouts</h4>
            <p>Single column, two columns, and centered layouts</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎨</div>
            <h4>Professional Designs</h4>
            <p>Carefully crafted for different industries and roles</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h4>Mobile Friendly</h4>
            <p>All templates work perfectly on any device</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💾</div>
            <h4>Easy Export</h4>
            <p>Download as PDF with one click</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;