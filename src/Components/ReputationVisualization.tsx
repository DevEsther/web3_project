// ReputationVisualization.tsx
import React from 'react';

const ReputationVisualization: React.FC = () => {
  const reputation = 85;

  const progressBarStyle: React.CSSProperties = {
    height: '20px',
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const progressStyle: React.CSSProperties = {
    height: '100%',
    width: `${reputation}%`,
    backgroundColor: '#4CAF50',
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Reputation Score</h3>
      <div style={progressBarStyle}>
        <div style={progressStyle}></div>
      </div>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Reputation: {reputation}%</p>
    </div>
  );
};

export default ReputationVisualization;
