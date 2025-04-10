// AnonymousReporting.tsx
import React, { useState } from 'react';

const AnonymousReporting: React.FC = () => {
  const [report, setReport] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  const submitReport = () => {
    if (!report) {
      setMessage('Report cannot be empty.');
      return;
    }

    setMessage('Report submitted successfully.');
    setReport('');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Anonymous Reporting</h3>
      <textarea
        value={report}
        onChange={(e) => setReport(e.target.value)}
        placeholder="Describe the issue anonymously"
        rows={5}
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      />
      <button
        onClick={submitReport}
        style={{ padding: '10px', backgroundColor: '#f44336', color: 'white', width: '100%', border: 'none', borderRadius: '5px' }}
      >
        Submit Report
      </button>
      {message && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
};

export default AnonymousReporting;
