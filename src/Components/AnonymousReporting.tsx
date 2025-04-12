import React, { useState } from 'react';
import { useWallet } from './context/WalletContext';

const AnonymousRouting: React.FC = () => {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State for the reporting form
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      setIsConnected(true);
    } catch (err) {
      setError('Failed to connect wallet');
    }
  };

  const handleDisconnectWallet = () => {
    disconnectWallet();
    setIsConnected(false);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Replace with your actual report submission logic
      // For now, simulate the report submission
      setSuccessMessage('Report submitted successfully!');
    } catch (error) {
      setErrorMessage('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Anonymous Reporting</h3>
      {!walletAddress ? (
        <div>
          <button
            onClick={handleConnectWallet}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div>
          <p>Connected Wallet: {walletAddress}</p>
          <button
            onClick={handleDisconnectWallet}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Disconnect Wallet
          </button>

          {/* Display the report form after the wallet is connected */}
          <div style={{ marginTop: '20px' }}>
            <h4>Submit Anonymous Report</h4>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '10px' }}>
                <label>Description:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the issue"
                  rows={4}
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Severity:</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value)}
                  style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                >
                  <option value="">Select severity</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </button>
            </form>

            {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
          </div>
        </div>
      )}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default AnonymousRouting;
