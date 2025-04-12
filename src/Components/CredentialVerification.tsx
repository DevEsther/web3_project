import React, { useState } from 'react';

const CredentialVerification: React.FC = () => {
  // State to manage input fields and the verification status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if both email and password are provided
    if (!email || !password) {
      setVerificationStatus('Please fill in both email and password.');
      return;
    }

    // Mock API call to verify credentials (Replace with actual API logic)
    try {
      // Assuming a successful verification response for now
      // Replace with actual API logic as needed
      setVerificationStatus('Credential Verification Successful!');
    } catch (error) {
      setVerificationStatus('Verification failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h2>Credential Verification</h2>

      {/* Form for entering email and password */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Email input */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />

        {/* Password input */}
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />

        {/* Submit button */}
        <button
          type="submit"
          style={{
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Verify Credentials
        </button>
      </form>

      {/* Verification status message */}
      {verificationStatus && (
        <p style={{ marginTop: '20px', fontSize: '16px', color: verificationStatus.includes('Successful') ? 'green' : 'red' }}>
          {verificationStatus}
        </p>
      )}
    </div>
  );
};

export default CredentialVerification;
