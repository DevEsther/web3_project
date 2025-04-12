import React from 'react';

const Reputation: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#121212', padding: '60px 20px', color: 'white' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>
        Reputation Visualization
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px'
      }}>
        {/* Reputation Score Card */}
        <div style={{
          backgroundColor: '#1E1E1E',
          padding: '30px',
          borderRadius: '12px',
          width: '320px',
          textAlign: 'center',
          boxShadow: '0 0 12px rgba(0, 255, 200, 0.1)'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Reputation Score</h3>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00E6B8' }}>89%</p>
          <p style={{ fontSize: '1rem', color: '#bbb' }}>Overall community trust level</p>
        </div>

        {/* Activity Graph Placeholder */}
        <div style={{
          backgroundColor: '#1E1E1E',
          padding: '30px',
          borderRadius: '12px',
          width: '320px',
          height: '200px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(0, 255, 200, 0.1)'
        }}>
          <p style={{ color: '#999' }}>[Graph Placeholder]</p>
        </div>
      </div>

      <p style={{
        marginTop: '40px',
        fontSize: '1rem',
        color: '#aaa',
        textAlign: 'center',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Your reputation is calculated using verifiable credentials, past transactions, contributions, and social endorsements. This allows dApps and DAOs to build trustless yet reliable systems.
      </p>
    </div>
  );
};

export default Reputation;
