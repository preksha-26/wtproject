import React from 'react';
import './ResumeForm.css'; // We'll create this CSS file

const ResumeForm = ({ 
  resumeData, 
  onUpdate, 
  onAddEducation, 
  onAddExperience, 
  onAddSkill 
}) => {
  const updatePersonalInfo = (field, value) => {
    onUpdate('personalInfo', {
      ...resumeData.personalInfo,
      [field]: value
    });
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    onUpdate('education', updatedEducation);
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    onUpdate('experience', updatedExperience);
  };

  const updateSkills = (index, value) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;
    onUpdate('skills', updatedSkills);
  };

  return (
    <div className="form-container">
      {/* Personal Information */}
      <div className="form-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="form-group">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-input"
            value={resumeData.personalInfo.firstName}
            onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-input"
            value={resumeData.personalInfo.lastName}
            onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            value={resumeData.personalInfo.email}
            onChange={(e) => updatePersonalInfo('email', e.target.value)}
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-input"
            value={resumeData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo('phone', e.target.value)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Professional Summary</label>
          <textarea
            className="form-textarea"
            value={resumeData.personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            placeholder="Experienced professional with expertise in..."
          />
        </div>
      </div>

      {/* Education */}
      <div className="form-section">
        <div className="section-header">
          <h3 className="section-title">Education</h3>
          <button className="add-button" onClick={onAddEducation}>+ Add Education</button>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="form-group">
              <label className="form-label">School/University</label>
              <input
                type="text"
                className="form-input"
                value={edu.school}
                onChange={(e) => updateEducation(index, 'school', e.target.value)}
                placeholder="University of Example"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Degree</label>
              <input
                type="text"
                className="form-input"
                value={edu.degree}
                onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                placeholder="Bachelor of Science"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Field of Study</label>
              <input
                type="text"
                className="form-input"
                value={edu.field}
                onChange={(e) => updateEducation(index, 'field', e.target.value)}
                placeholder="Computer Science"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="form-section">
        <div className="section-header">
          <h3 className="section-title">Work Experience</h3>
          <button className="add-button" onClick={onAddExperience}>+ Add Experience</button>
        </div>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="form-group">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-input"
                value={exp.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                placeholder="Tech Company Inc."
              />
            </div>
            <div className="form-group">
              <label className="form-label">Position</label>
              <input
                type="text"
                className="form-input"
                value={exp.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                placeholder="Software Developer"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                value={exp.description}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="form-section">
        <div className="section-header">
          <h3 className="section-title">Skills</h3>
          <button className="add-button" onClick={onAddSkill}>+ Add Skill</button>
        </div>
        {resumeData.skills.map((skill, index) => (
          <div className="form-group" key={index}>
            <input
              type="text"
              className="form-input"
              value={skill}
              onChange={(e) => updateSkills(index, e.target.value)}
              placeholder="JavaScript, React, Node.js"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeForm;