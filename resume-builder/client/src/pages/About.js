import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 4rem 0;
  min-height: 100vh;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.gray};
  }
`;

const TeamSection = styled.div`
  margin-top: 3rem;

  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 2rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: center;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.gray};
    margin: 0;
  }
`;

const About = () => {
  return (
    <AboutContainer className="container">
      <AboutContent>
        <h1>About ResumeBuilder</h1>
        <p>
          ResumeBuilder is a modern web application designed to help job seekers create professional, 
          eye-catching resumes in minutes. Our mission is to simplify the resume creation process while 
          ensuring that every user can present their skills and experience in the best possible way.
        </p>
        <p>
          With our easy-to-use interface, multiple template options, and real-time preview, 
          you can create a resume that stands out from the competition. Whether you're a recent 
          graduate or an experienced professional, ResumeBuilder has the tools you need to 
          advance your career.
        </p>
        
        <TeamSection>
          <h2>Our Team</h2>
          <TeamGrid>
            <TeamMember>
              <h3>John Doe</h3>
              <p>Frontend Developer</p>
            </TeamMember>
            <TeamMember>
              <h3>Jane Smith</h3>
              <p>Backend Developer</p>
            </TeamMember>
            <TeamMember>
              <h3>Mike Johnson</h3>
              <p>UI/UX Designer</p>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;