import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import DownloadButton from '../components/DownloadButton';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const location = useLocation();
  const resumeRef = useRef();
  const [selectedTemplate, setSelectedTemplate] = useState('classic');
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    education: [],
    experience: [],
    skills: [],
    projects: []
  });

  // Get template from navigation state or localStorage
  useEffect(() => {
    const templateFromState = location.state?.selectedTemplate;
    const templateFromStorage = localStorage.getItem('selectedTemplate');
    
    if (templateFromState) {
      console.log('Setting template from state:', templateFromState);
      setSelectedTemplate(templateFromState.style);
      localStorage.setItem('selectedTemplate', JSON.stringify(templateFromState));
    } else if (templateFromStorage) {
      console.log('Setting template from storage:', templateFromStorage);
      try {
        const template = JSON.parse(templateFromStorage);
        setSelectedTemplate(template.style);
      } catch (error) {
        console.error('Error parsing template from storage:', error);
        setSelectedTemplate('classic');
      }
    }
  }, [location]);

  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          school: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          gpa: '',
          description: ''
        }
      ]
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
          current: false
        }
      ]
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  // Generate filename based on user's name
  const getFileName = () => {
    const { firstName, lastName } = resumeData.personalInfo;
    if (firstName && lastName) {
      return `${firstName}_${lastName}_Resume`;
    }
    return 'resume';
  };

  return (
    <div className="builder-container">
      <div className="builder-header">
        <div>
          <h1>Resume Builder</h1>
          <div className="template-info">
            Current Template: <strong>{selectedTemplate}</strong>
          </div>
        </div>
        <DownloadButton 
          resumeRef={resumeRef}
          fileName={getFileName()}
        />
      </div>
      
      <div className="builder-content">
        <div className="form-section">
          <ResumeForm 
            resumeData={resumeData}
            onUpdate={updateResumeData}
            onAddEducation={addEducation}
            onAddExperience={addExperience}
            onAddSkill={addSkill}
          />
        </div>
        
        <div className="preview-section">
          <div ref={resumeRef}>
            <ResumePreview 
              selectedTemplate={selectedTemplate}
              resumeData={resumeData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;