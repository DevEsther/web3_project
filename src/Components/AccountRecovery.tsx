// AccountRecovery.tsx
import React, { useState } from 'react';

const AccountRecovery: React.FC = () => {
  const [recoveryKey, setRecoveryKey] = useState<string>('');
  const [recoveryStatus, setRecoveryStatus] = useState<string | null>(null);

  const handleAccountRecovery = () => {
    if (!recoveryKey) {
      setRecoveryStatus('Please provide a recovery key.');
      return;
    }

    const isValid = recoveryKey === 'valid-recovery-key'; 
    setRecoveryStatus(isValid ? 'Account recovery successful!' : 'Invalid recovery key.');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Account Recovery</h3>
      <input
        type="text"
        placeholder="Enter recovery key"
        value={recoveryKey}
        onChange={(e) => setRecoveryKey(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button
        onClick={handleAccountRecovery}
        style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', width: '100%', border: 'none', borderRadius: '5px' }}
      >
        Recover Account
      </button>
      {recoveryStatus && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{recoveryStatus}</p>}
    </div>
  );
};

export default AccountRecovery;
