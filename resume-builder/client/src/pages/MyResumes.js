import React from 'react';
import styled from 'styled-components';

const MyResumesContainer = styled.div`
  padding: 2rem 0;
  min-height: 100vh;
`;

const ResumesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ResumeCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.medium};
  border-left: 4px solid ${props => props.theme.colors.primary};
`;

const ResumeTitle = styled.h3`
  color: ${props => props.theme.colors.dark};
  margin-bottom: 0.5rem;
`;

const ResumeDate = styled.p`
  color: ${props => props.theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &.primary {
    background: ${props => props.theme.colors.primary};
    color: white;

    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }

  &.secondary {
    background: transparent;
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
    }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${props => props.theme.colors.gray};

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.dark};
  }
`;

const MyResumes = () => {
  // For demo purposes - in real app, this would come from backend
  const resumes = [];

  return (
    <MyResumesContainer className="container">
      <h1 style={{color: '#4361ee', marginBottom: '2rem'}}>My Resumes</h1>
      
      {resumes.length > 0 ? (
        <ResumesGrid>
          {resumes.map(resume => (
            <ResumeCard key={resume.id}>
              <ResumeTitle>{resume.title}</ResumeTitle>
              <ResumeDate>Last modified: {resume.lastModified}</ResumeDate>
              <ButtonGroup>
                <Button className="primary">Edit</Button>
                <Button className="secondary">Download</Button>
                <Button className="secondary">Delete</Button>
              </ButtonGroup>
            </ResumeCard>
          ))}
        </ResumesGrid>
      ) : (
        <EmptyState>
          <h3>No resumes yet</h3>
          <p>Create your first resume to get started!</p>
          <Button 
            className="primary" 
            style={{marginTop: '1rem', padding: '0.75rem 1.5rem'}}
            onClick={() => window.location.href = '/builder'}
          >
            Create Resume
          </Button>
        </EmptyState>
      )}
    </MyResumesContainer>
  );
};

export default MyResumes;