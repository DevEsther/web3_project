import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const WalletStatus: React.FC = () => {
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null); 

  
  const initWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setSigner(signer);

       
        await provider.send("eth_requestAccounts", []);
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log("Wallet connected:", address);
      } catch (error) {
        console.error("Error connecting wallet:", error);
        setError('User denied account access or an error occurred during connection.');
      }
    } else {
      console.error("Ethereum provider not found. Install MetaMask or other Ethereum wallet.");
      setError('Ethereum provider not found. Install MetaMask or another Ethereum wallet.');
    }
  };


  const sendTransaction = async () => {
    if (!signer) {
      setError('Wallet is not connected.');
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
      console.error("Transaction failed:", transactionError);
      setError('Transaction failed. Please try again.');
      setIsSending(false);
    }
  };

  useEffect(() => {
    initWallet();
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  };

 
  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#ff9900',  
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '16px',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#e68a00', 
  };

  const addressStyle: React.CSSProperties = {
    color: '#0077cc',
    fontWeight: 'bold',
    wordBreak: 'break-all',
  };

  const transactionHashStyle: React.CSSProperties = {
    marginTop: '20px',
    color: '#888',
    fontSize: '14px',
  };

  const errorStyle: React.CSSProperties = {
    color: '#ff6666',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2>Wallet Status</h2>
      {walletAddress ? (
        <div style={cardStyle}>
          <p>Wallet connected: <span style={addressStyle}>{walletAddress}</span></p>
          
          <button
            style={buttonStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor as string;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor as string;
            }}
            onClick={sendTransaction}
            disabled={isSending} 
          >
            {isSending ? 'Sending...' : 'Send 0.01 ETH'}
          </button>

          {transactionHash && <p style={transactionHashStyle}>Transaction Hash: {transactionHash}</p>}
        </div>
      ) : (
        <p style={errorStyle}>Wallet not connected.</p>
      )}

      {error && <p style={errorStyle}>{error}</p>} {/* Show error message if any */}
    </div>
  );
};

export default WalletStatus;
