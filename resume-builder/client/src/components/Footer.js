import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }

  p, a {
    opacity: 0.8;
    margin-bottom: 0.5rem;
    display: block;
  }

  a:hover {
    opacity: 1;
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h3>ResumeBuilder</h3>
            <p>Create professional resumes in minutes. Stand out from the crowd with our easy-to-use resume builder.</p>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <a href="/builder">Resume Builder</a>
            <a href="/templates">Templates</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Info</h3>
            <p>Email: support@resumebuilder.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </FooterSection>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;