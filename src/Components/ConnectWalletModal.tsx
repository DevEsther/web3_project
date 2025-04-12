import React from 'react';
import metamaskIcon from '../assets/Frame 317.png';
import walletconnectIcon from '../assets/Frame 317 (1).png';
import trustwalletIcon from '../assets/IMG_20250410_131112-removebg-preview 1 (2).png';
import lockIcon from '../assets/mdi-light_lock.png';
import { useNavigate } from 'react-router-dom';

interface ConnectWalletModalProps {
  onClose?: () => void; 
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ onClose }) => {
  const navigate = useNavigate();


  const handleCancel = () => {
    navigate('/dashboard'); 
  };

  const handleConnectWallet = () => {
 
    alert('Wallet Connected!');
  };

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#232936',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
      width: '400px',
      zIndex: 1000,
      maxHeight: '80vh', 
      overflowY: 'auto', 
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0 }}>Connect Wallet</h2>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2em',
            cursor: 'pointer'
          }}
          onClick={handleCancel}
        >
          ×
        </button>
      </div>

      <p style={{ marginBottom: '20px' }}>Securely connect your wallet to interact with TruthCheck</p>

     
      <div style={{ marginBottom: '10px' }}>
        <button style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          background: '#353C4A',
          color: 'white',
          border: 'none'
        }} onClick={handleConnectWallet}>
          <img src={metamaskIcon} alt="MetaMask" style={{ marginRight: '10px', height: '20px' }} />
          MetaMask
        </button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          background: '#353C4A',
          color: 'white',
          border: 'none'
        }} onClick={handleConnectWallet}>
          <img src={walletconnectIcon} alt="WalletConnect" style={{ marginRight: '10px', height: '20px' }} />
          WalletConnect
        </button>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <button style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'left',
          background: '#353C4A',
          color: 'white',
          border: 'none'
        }} onClick={handleConnectWallet}>
          <img src={trustwalletIcon} alt="Trust Wallet" style={{ marginRight: '10px', height: '20px' }} />
          Trust Wallet
        </button>
      </div>

      <div style={{
        marginBottom: '20px',
        padding: '10px',
        borderRadius: '5px',
        background: '#353C4A',
        color: 'white'
      }}>
        <img src={lockIcon} alt="Lock" style={{ marginRight: '10px', height: '20px' }} />
        Continue as Anonymous <br />
        <span style={{ fontSize: '0.8em' }}>
          You can use TruthCheck without connecting a wallet but some features may be limited.
        </span>
      </div>

    
      <button
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '20px',
          background: '#4CAF50', 
          color: 'white',
          border: 'none'
        }}
        onClick={handleConnectWallet}
      >
        Connect My Wallet
      </button>
    </div>
  );
};

export default ConnectWalletModal;
