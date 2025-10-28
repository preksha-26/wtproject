import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DashboardContainer = styled.div`
  padding: 2rem 0;
  min-height: 100vh;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: center;

  .number {
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  .label {
    color: ${props => props.theme.colors.gray};
    font-size: 0.9rem;
  }
`;

const QuickActions = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};

  h2 {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.dark};
  }
`;

const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ActionCard = styled(Link)`
  background: ${props => props.theme.colors.light};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer className="container">
      <h1 style={{color: '#4361ee', marginBottom: '2rem'}}>Dashboard</h1>
      
      <StatsGrid>
        <StatCard>
          <div className="number">0</div>
          <div className="label">Resumes Created</div>
        </StatCard>
        <StatCard>
          <div className="number">0</div>
          <div className="label">Templates Used</div>
        </StatCard>
        <StatCard>
          <div className="number">0</div>
          <div className="label">Downloads</div>
        </StatCard>
      </StatsGrid>

      <QuickActions>
        <h2>Quick Actions</h2>
        <ActionGrid>
          <ActionCard to="/builder">
            <h3>Create New Resume</h3>
            <p>Start from scratch or use a template</p>
          </ActionCard>
          <ActionCard to="/templates">
            <h3>Browse Templates</h3>
            <p>Choose from professional designs</p>
          </ActionCard>
          <ActionCard to="/my-resumes">
            <h3>My Resumes</h3>
            <p>View and manage your resumes</p>
          </ActionCard>
        </ActionGrid>
      </QuickActions>
    </DashboardContainer>
  );
};

export default Dashboard;