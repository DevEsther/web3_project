import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Use Link instead of a
import { WalletProvider } from './Components/context/WalletContext'; 
import WalletStatus from './Components/WalletStatus';  
import NetworkStatus from './Components/NetworkStatus';  
import AnonymousReporting from './Components/AnonymousReporting';
import PrivacySettings from './Components/PrivacySettings';
import ReputationVisualization from './Components/ReputationVisualization';
import DIDManagement from './Components/DIDManagement';
import CredentialVerification from './Components/CredentialVerification';
import AccountRecovery from './Components/AccountRecovery';
import TransactionSender from './Components/TransactionSender'; // Ensure the import is correct

const App: React.FC = () => {
  return (
    <WalletProvider>
      <Router>
        <div style={{ padding: '20px' }}>
          <h1>Web3 App</h1>

          {/* Navigation Links */}
          <nav>
            <ul>
              <li><Link to="/">Wallet Status</Link></li> {/* Use Link instead of a */}
              <li><Link to="/network-status">Network Status</Link></li>
              <li><Link to="/anonymous-reporting">Anonymous Reporting</Link></li>
              <li><Link to="/privacy-settings">Privacy Settings</Link></li>
              <li><Link to="/reputation-visualization">Reputation Visualization</Link></li>
              <li><Link to="/did-management">DID Management</Link></li>
              <li><Link to="/credential-verification">Credential Verification</Link></li>
              <li><Link to="/account-recovery">Account Recovery</Link></li>
              <li><Link to="/transaction-sender">Transaction Sender</Link></li> {/* Corrected link */}
            </ul>
          </nav>

          {/* Routing */}
          <Routes>
            <Route path="/" element={<WalletStatus />} />
            <Route path="/network-status" element={<NetworkStatus />} />
            <Route path="/anonymous-reporting" element={<AnonymousReporting />} />
            <Route path="/privacy-settings" element={<PrivacySettings />} />
            <Route path="/reputation-visualization" element={<ReputationVisualization />} />
            <Route path="/did-management" element={<DIDManagement />} />
            <Route path="/credential-verification" element={<CredentialVerification />} />
            <Route path="/account-recovery" element={<AccountRecovery />} />
            <Route path="/transaction-sender" element={<TransactionSender />} /> {/* Corrected this route */}
          </Routes>
        </div>
      </Router>
    </WalletProvider>
  );
};

export default App;
