import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    },
    education: [
      {
        school: '',
        degree: '',
        year: ''
      }
    ],
    experience: [
      {
        company: '',
        position: '',
        duration: '',
        description: ''
      }
    ],
    skills: []
  });

  const [currentSkill, setCurrentSkill] = useState('');

  const handlePersonalInfoChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index][field] = value;
    setResumeData(prev => ({
      ...prev,
      education: updatedEducation
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index][field] = value;
    setResumeData(prev => ({
      ...prev,
      experience: updatedExperience
    }));
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill('');
    }
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { school: '', degree: '', year: '' }
      ]
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: '', position: '', duration: '', description: '' }
      ]
    }));
  };

  const downloadPDF = () => {
    alert('PDF download functionality will be added later!');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
      <h1 style={{ color: '#4361ee', marginBottom: '2rem', textAlign: 'center' }}>Resume Builder</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        height: '80vh'
      }}>
        {/* FORM SECTION */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          overflowY: 'auto'
        }}>
          <h3 style={{ color: '#4361ee', marginBottom: '1rem', borderBottom: '2px solid #4361ee', paddingBottom: '0.5rem' }}>
            Personal Information
          </h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>First Name</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.firstName}
              onChange={(e) => handlePersonalInfoChange('firstName', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="John"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Last Name</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.lastName}
              onChange={(e) => handlePersonalInfoChange('lastName', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="Doe"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
            <input 
              type="email" 
              value={resumeData.personalInfo.email}
              onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="john.doe@email.com"
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone</label>
            <input 
              type="tel" 
              value={resumeData.personalInfo.phone}
              onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Address</label>
            <input 
              type="text" 
              value={resumeData.personalInfo.address}
              onChange={(e) => handlePersonalInfoChange('address', e.target.value)}
              style={{ 
                width: '100%', 
                padding: '0.75rem', 
                border: '2px solid #e9ecef', 
                borderRadius: '5px',
                fontSize: '1rem'
              }}
              placeholder="New York, NY"
            />
          </div>

          {/* EDUCATION SECTION */}
          <h3 style={{ color: '#4361ee', marginBottom: '1rem', borderBottom: '2px solid #4361ee', paddingBottom: '0.5rem' }}>
            Education
          </h3>
          
          {resumeData.education.map((edu, index) => (
            <div key={index} style={{ marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '5px' }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>School/University</label>
                <input 
                  type="text" 
                  value={edu.school}
                  onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '2px solid #e9ecef', 
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                  placeholder="University of Example"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Degree</label>
                <input 
                  type="text" 
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '2px solid #e9ecef', 
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Year</label>
                <input 
                  type="text" 
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem', 
                    border: '2px solid #e9ecef', 
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                  placeholder="2020-2024"
                />
              </div>
            </div>
          ))}
          
          <button 
            onClick={addEducation}
            style={{ 
              background: '#4361ee', 
              color: 'white', 
              padding: '0.5rem 1rem', 
              border: 'none', 
              borderRadius: '5px',
              marginBottom: '2rem'
            }}
          >
            + Add Education
          </button>

          {/* SKILLS SECTION */}
          <h3 style={{ color: '#4361ee', marginBottom: '1rem', borderBottom: '2px solid #4361ee', paddingBottom: '0.5rem' }}>
            Skills
          </h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                style={{ 
                  flex: 1, 
                  padding: '0.75rem', 
                  border: '2px solid #e9ecef', 
                  borderRadius: '5px',
                  fontSize: '1rem'
                }}
                placeholder="Add a skill"
              />
              <button 
                onClick={addSkill}
                style={{ 
                  background: '#4361ee', 
                  color: 'white', 
                  padding: '0.75rem 1rem', 
                  border: 'none', 
                  borderRadius: '5px'
                }}
              >
                Add
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {resumeData.skills.map((skill, index) => (
              <span 
                key={index}
                style={{ 
                  background: '#4361ee', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={downloadPDF}
              style={{ 
                background: '#28a745', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                border: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold',
                flex: 1
              }}
            >
              Download PDF
            </button>
            <button 
              style={{ 
                background: '#4361ee', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                border: 'none', 
                borderRadius: '5px',
                fontWeight: 'bold',
                flex: 1
              }}
            >
              Save Resume
            </button>
          </div>
        </div>

        {/* PREVIEW SECTION */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          overflowY: 'auto'
        }}>
          <h3 style={{ color: '#4361ee', marginBottom: '1rem', borderBottom: '2px solid #4361ee', paddingBottom: '0.5rem' }}>
            Resume Preview
          </h3>
          
          <div style={{ 
            background: 'white', 
            padding: '2rem', 
            minHeight: '500px',
            border: '1px solid #e9ecef'
          }}>
            {/* PERSONAL INFO */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ color: '#4361ee', marginBottom: '0.5rem', fontSize: '2rem' }}>
                {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
              </h1>
              <div style={{ color: '#6c757d', fontSize: '1rem' }}>
                {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email} | </span>}
                {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone} | </span>}
                {resumeData.personalInfo.address}
              </div>
            </div>

            {/* EDUCATION */}
            {resumeData.education.some(edu => edu.school || edu.degree || edu.year) && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#4361ee', borderBottom: '2px solid #4361ee', paddingBottom: '0.25rem', marginBottom: '1rem' }}>
                  EDUCATION
                </h2>
                {resumeData.education.map((edu, index) => (
                  <div key={index} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h3 style={{ margin: '0', fontSize: '1.1rem' }}>{edu.school}</h3>
                      <span style={{ color: '#6c757d' }}>{edu.year}</span>
                    </div>
                    <p style={{ margin: '0', color: '#495057' }}>{edu.degree}</p>
                  </div>
                ))}
              </div>
            )}

            {/* SKILLS */}
            {resumeData.skills.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ color: '#4361ee', borderBottom: '2px solid #4361ee', paddingBottom: '0.25rem', marginBottom: '1rem' }}>
                  SKILLS
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {resumeData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      style={{ 
                        background: '#e9ecef', 
                        color: '#495057', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '15px',
                        fontSize: '0.9rem'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* PLACEHOLDER FOR EMPTY SECTIONS */}
            {!resumeData.education.some(edu => edu.school || edu.degree || edu.year) && resumeData.skills.length === 0 && (
              <div style={{ textAlign: 'center', color: '#6c757d', marginTop: '2rem' }}>
                <p>Start filling out the form to see your resume preview here!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;