import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Nav>
          <Logo to="/">ResumeBuilder</Logo>
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/builder">Builder</Link>
            <Link to="/templates">Templates</Link>
            <Link to="/my-resumes">My Resumes</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
