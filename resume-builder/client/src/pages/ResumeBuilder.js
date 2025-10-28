import React from 'react';

const ResumeBuilder = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>RESUME BUILDER FORM IS WORKING!</h1>
      <p>If you see this red text, the file is updated.</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginTop: '2rem'
      }}>
        <div style={{ background: 'lightblue', padding: '2rem' }}>
          <h3>Form Section</h3>
        </div>
        <div style={{ background: 'lightgreen', padding: '2rem' }}>
          <h3>Preview Section</h3>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;