import React from 'react';
import WalletStatus from './WalletStatus';  
import NetworkStatus from './NetworkStatus'; 

const Web3Layout: React.FC = () => {
  return (
    <div>
      <h1>Web3 App</h1>
      <WalletStatus />
      <NetworkStatus />
    </div>
  );
};

export default Web3Layout;
