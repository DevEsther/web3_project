// DIDManagement.tsx
import React, { useState } from 'react';

const DIDManagement: React.FC = () => {
  const [did, setDid] = useState<string | null>(null);
  const [newDid, setNewDid] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const createOrUpdateDID = () => {
    if (!newDid) {
      setError('DID cannot be empty');
      return;
    }

    setDid(newDid);
    setNewDid('');
    setError(null);
    console.log('DID created/updated:', newDid);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '400px', margin: '0 auto' }}>
      <h3>DID Management</h3>
      {did ? (
        <div>
          <p>Your DID: <strong>{did}</strong></p>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter new DID"
            value={newDid}
            onChange={(e) => setNewDid(e.target.value)}
            style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
          />
          <button
            onClick={createOrUpdateDID}
            style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', width: '100%', border: 'none', borderRadius: '5px' }}
          >
            Create/Update DID
          </button>
        </div>
      )}
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
    </div>
  );
};

export default DIDManagement;
