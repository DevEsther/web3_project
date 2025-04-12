import React, { useState, useEffect } from 'react';
import metamaskIcon from '../assets/Frame 317.png';
import walletconnectIcon from '../assets/Frame 317 (1).png';
import trustwalletIcon from '../assets/IMG_20250410_131112-removebg-preview 1 (2).png';
import lockIcon from '../assets/mdi-light_lock.png';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

interface ConnectWalletModalProps {
  onClose?: () => void;
}

const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({ onClose }) => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [userBalance, setUserBalance] = useState<ethers.BigNumberish | null>(null);

  const navigate = useNavigate();

  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
    navigate('/dashboard');
  };

  const initWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);

        await provider.send('eth_requestAccounts', []);
        const address = await signer.getAddress();
        setWalletAddress(address);
        setIsWalletConnected(true);
        setShowMessage(true);

        const balance = await provider.getBalance(address);
        setUserBalance(balance);
      } catch (error) {
        console.error('Error connecting wallet:', error);
        setError('User denied account access or an error occurred during connection.');
      }
    } else {
      console.error('Ethereum provider not found. Install MetaMask or other Ethereum wallet.');
      setError('Ethereum provider not found. Install MetaMask or another Ethereum wallet.');
    }
  };

  const sendTransaction = async () => {
    if (!signer) {
      setError('Wallet is not connected.');
      return;
    }

    if (!userBalance || BigInt(userBalance.toString()) < ethers.parseEther('0.01')) {
      setError('Insufficient Balance. Please ensure you have enough ETH.');
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      const tx = await signer.sendTransaction({
        to: '0xRecipientAddress',
        value: ethers.parseEther('0.01'),
      });

      setTransactionHash(tx.hash);
      console.log(`Transaction sent: ${tx.hash}`);
      await tx.wait();

      console.log(`Transaction confirmed in block: ${tx.blockNumber}`);
      setIsSending(false);
    } catch (transactionError) {
      console.error('Transaction failed:', transactionError);
      setError('Transaction failed. Please try again.');
      setIsSending(false);
    }
  };

  const handleConnectWallet = () => {
    initWallet();
  };

  useEffect(() => {
    initWallet();
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#232936',
        color: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        width: '600px',
        zIndex: 1000,
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h2 style={{ margin: 0 }}>Connect Wallet</h2>
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2em',
            cursor: 'pointer',
          }}
          onClick={handleCancel}
        >
          ×
        </button>
      </div>

      <p style={{ marginBottom: '20px' }}>Securely connect your wallet to interact with TruthCheck</p>

      {walletAddress ? (
        <div style={{ marginBottom: '20px', padding: '10px', textAlign: 'center' }}>
          <p>Wallet connected: <span style={{ color: '#0077cc', fontWeight: 'bold' }}>{walletAddress}</span></p>
          <button
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '20px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
            }}
            onClick={sendTransaction}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send 0.01 ETH'}
          </button>
          {transactionHash && <p style={{ marginTop: '20px', color: '#888' }}>Transaction Hash: {transactionHash}</p>}
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: '10px' }}>
            <button
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'left',
                background: '#353C4A',
                color: 'white',
                border: 'none',
              }}
              onClick={handleConnectWallet}
            >
              <img
                src={metamaskIcon}
                alt="MetaMask"
                style={{ marginRight: '10px', height: '20px' }}
              />
              MetaMask
            </button>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <button
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'left',
                background: '#353C4A',
                color: 'white',
                border: 'none',
              }}
              onClick={handleConnectWallet}
            >
              <img
                src={walletconnectIcon}
                alt="WalletConnect"
                style={{ marginRight: '10px', height: '20px' }}
              />
              WalletConnect
            </button>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <button
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                textAlign: 'left',
                background: '#353C4A',
                color: 'white',
                border: 'none',
              }}
              onClick={handleConnectWallet}
            >
              <img
                src={trustwalletIcon}
                alt="Trust Wallet"
                style={{ marginRight: '10px', height: '20px' }}
              />
              Trust Wallet
            </button>
          </div>

          <div
            style={{
              marginBottom: '20px',
              padding: '10px',
              borderRadius: '5px',
              background: '#353C4A',
              color: 'white',
            }}
          >
            <img
              src={lockIcon}
              alt="Lock"
              style={{ marginRight: '10px', height: '20px' }}
            />
            Continue as Anonymous <br />
            <span style={{ fontSize: '0.8em' }}>
              You can use TruthCheck without connecting a wallet but some features may be limited.
            </span>
          </div>
        </div>
      )}

      {showMessage && walletAddress && (
        <p style={{ color: '#4CAF50', fontSize: '16px', textAlign: 'center' }}>
          Wallet connected successfully! Address: {walletAddress}
        </p>
      )}

      {error && <p style={{ color: '#ff6666', fontSize: '16px', fontWeight: 'bold' }}>{error}</p>}
    </div>
  );
};

export default ConnectWalletModal;
