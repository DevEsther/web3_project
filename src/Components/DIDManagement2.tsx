import React, { useState } from 'react';

const DIDManagement: React.FC = () => {
  const [didList, setDidList] = useState<any[]>([]);
  const [newDID, setNewDID] = useState<string>('');
  const [updateDID, setUpdateDID] = useState<string>(''); // Track the DID to be updated

  // Function to handle adding a new DID
  const handleAddDID = () => {
    if (newDID) {
      setDidList([...didList, { id: newDID, createdAt: new Date() }]);
      setNewDID('');
    }
  };

  // Function to handle deleting a DID
  const handleDeleteDID = (id: string) => {
    const updatedList = didList.filter((did) => did.id !== id);
    setDidList(updatedList);
  };

  // Function to handle updating a DID
  const handleUpdateDID = (id: string, newDID: string) => {
    const updatedList = didList.map((did) =>
      did.id === id ? { ...did, id: newDID } : did
    );
    setDidList(updatedList);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>DID Management</h2>
      <p>Manage your Decentralized Identifiers (DIDs) here.</p>

      {/* Form for adding a new DID */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter DID identifier"
          value={newDID}
          onChange={(e) => setNewDID(e.target.value)}
          style={{
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <button
          onClick={handleAddDID}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add DID
        </button>
      </div>

      {/* DID List */}
      <div>
        <h3>Existing DIDs</h3>
        {didList.length === 0 ? (
          <p>No DIDs found.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {didList.map((did, index) => (
              <li
                key={index}
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  marginBottom: '10px',
                  borderRadius: '5px',
                }}
              >
                <strong>DID:</strong> {did.id} <br />
                <strong>Created At:</strong> {did.createdAt.toLocaleString()} <br />
                <button
                  onClick={() => handleDeleteDID(did.id)}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    padding: '5px 10px',
                    marginTop: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Delete DID
                </button>
                <button
                  onClick={() => {
                    setUpdateDID(did.id); // Set the DID to be updated
                  }}
                  style={{
                    backgroundColor: '#2196F3',
                    color: 'white',
                    padding: '5px 10px',
                    marginTop: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                >
                  Update DID
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Update DID Form (Only shown if updateDID is set) */}
      {updateDID && (
        <div style={{ marginTop: '20px' }}>
          <h3>Update DID</h3>
          <input
            type="text"
            value={updateDID}
            onChange={(e) => setUpdateDID(e.target.value)}
            style={{
              padding: '10px',
              width: '100%',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
          <button
            onClick={() => {
              handleUpdateDID(updateDID, updateDID);
              setUpdateDID(''); // Clear the update field after update
            }}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Update DID
          </button>
        </div>
      )}
    </div>
  );
};

export default DIDManagement;
