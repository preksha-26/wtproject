import React from 'react';
import './ResumePreview.css'; // We'll create this CSS file

const ResumePreview = ({ selectedTemplate, resumeData }) => {
  const renderTemplate = () => {
    // For now, render a basic preview
    // You can expand this to render different templates based on selectedTemplate
    return (
      <div className="resume-content">
        {/* Header */}
        <div className="resume-header">
          <h1 className="resume-name">
            {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
          </h1>
          <div className="contact-info">
            <span>{resumeData.personalInfo.email}</span>
            <span>•</span>
            <span>{resumeData.personalInfo.phone}</span>
          </div>
        </div>

        {/* Summary */}
        {resumeData.personalInfo.summary && (
          <div className="resume-section">
            <h2 className="section-title">Professional Summary</h2>
            <p className="section-content">
              {resumeData.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="resume-section">
            <h2 className="section-title">Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="item-header">
                  <h3 className="item-title">{edu.school}</h3>
                  <span className="item-date">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="item-subtitle">
                  {edu.degree} in {edu.field}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <div className="resume-section">
            <h2 className="section-title">Work Experience</h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="item-header">
                  <h3 className="item-title">{exp.company}</h3>
                  <span className="item-date">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="item-subtitle">
                  {exp.position}
                </p>
                <p className="item-description">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <div className="resume-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-list">
              {resumeData.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>Resume Preview</h3>
        <span className="template-badge">Template: {selectedTemplate}</span>
      </div>
      <div className="preview-content" key={selectedTemplate}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;