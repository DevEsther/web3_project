// PrivacySettings.tsx
import React, { useState } from 'react';

const PrivacySettings: React.FC = () => {
  const [privacyOption, setPrivacyOption] = useState<'public' | 'private'>('public');

  const togglePrivacy = () => {
    setPrivacyOption(privacyOption === 'public' ? 'private' : 'public');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h3>Privacy Settings</h3>
      <p>Your current privacy setting: <strong>{privacyOption}</strong></p>
      <button
        onClick={togglePrivacy}
        style={{ padding: '10px', backgroundColor: '#ff9800', color: 'white', width: '100%', border: 'none', borderRadius: '5px' }}
      >
        Toggle Privacy
      </button>
    </div>
  );
};

export default PrivacySettings;
