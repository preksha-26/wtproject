import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TemplatesContainer = styled.div`
  padding: 2rem 0;
  min-height: 100vh;
`;

const TemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TemplateCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TemplatePreview = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const TemplateInfo = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.dark};
  }

  p {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 1rem;
  }
`;

const UseTemplateButton = styled(Link)`
  display: inline-block;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 600;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const Templates = () => {
  const templates = [
    { id: 1, name: 'Classic', description: 'Clean and professional design' },
    { id: 2, name: 'Modern', description: 'Contemporary layout with bold sections' },
    { id: 3, name: 'Creative', description: 'Perfect for designers and creatives' },
    { id: 4, name: 'Executive', description: 'Formal design for senior positions' },
    { id: 5, name: 'Minimal', description: 'Simple and elegant' },
    { id: 6, name: 'Technical', description: 'Ideal for engineers and developers' }
  ];

  return (
    <TemplatesContainer className="container">
      <h1 style={{textAlign: 'center', marginBottom: '1rem', color: '#4361ee'}}>Resume Templates</h1>
      <p style={{textAlign: 'center', color: '#6c757d', marginBottom: '2rem'}}>
        Choose from our professionally designed templates to create a resume that stands out
      </p>
      
      <TemplatesGrid>
        {templates.map(template => (
          <TemplateCard key={template.id}>
            <TemplatePreview>
              {template.name} Template Preview
            </TemplatePreview>
            <TemplateInfo>
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <UseTemplateButton to="/builder">
                Use This Template
              </UseTemplateButton>
            </TemplateInfo>
          </TemplateCard>
        ))}
      </TemplatesGrid>
    </TemplatesContainer>
  );
};

export default Templates;