import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { BrowserProvider, Signer } from 'ethers'; 

interface WalletContextProps {
  walletAddress: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
  signer: Signer | null;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [signer, setSigner] = useState<Signer | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkIfWalletIsConnected = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum); 
        const signer = await provider.getSigner(); 
        const address = await signer.getAddress(); 
        if (address) {
          setSigner(signer);
          setWalletAddress(address); 
        }
      } catch (err) {
        console.error("Error connecting wallet:", err);
        setError('Failed to connect wallet');
      }
    } else {
      setError('Please install MetaMask or another Web3 wallet!');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum); 
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setSigner(signer); 
        setWalletAddress(address);
        console.log(`Connected: ${address}`);
      } else {
        alert('Please install MetaMask or a Web3 wallet!');
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setError('Failed to connect wallet');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setSigner(null);
    console.log('Disconnected');
  };

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, disconnectWallet, signer }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextProps => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export default WalletContext;
