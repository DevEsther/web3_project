// CredentialVerification.tsx
import React, { useState } from 'react';

const CredentialVerification: React.FC = () => {
  const [credential, setCredential] = useState<string>('');
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  const verifyCredential = () => {
    if (!credential) {
      setVerificationStatus('Please enter a credential to verify.');
      return;
    }

    const isVerified = credential === 'valid-credential'; 
    setVerificationStatus(isVerified ? 'Credential Verified!' : 'Credential Verification Failed.');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Credential Verification</h3>
      <input
        type="text"
        placeholder="Enter credential to verify"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button
        onClick={verifyCredential}
        style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', width: '100%', border: 'none', borderRadius: '5px' }}
      >
        Verify Credential
      </button>
      {verificationStatus && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{verificationStatus}</p>}
    </div>
  );
};

export default CredentialVerification;
