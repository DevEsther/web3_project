import React, { useEffect, useState } from 'react';
import { useWallet } from './context/WalletContext';

const NetworkStatus: React.FC = () => {
  const { signer } = useWallet();
  const [network, setNetwork] = useState<string | null>(null);

  useEffect(() => {
    const checkNetwork = async () => {
      if (signer) {
        const provider = signer.provider;
        if (provider) { 
          const network = await provider.getNetwork();
          setNetwork(network.name); 
        } else {
          console.error('Provider is null');
        }
      }
    };
    checkNetwork();
  }, [signer]);

  return (
    <div>
      {network ? (
        <p>Connected to {network}</p>
      ) : (
        <p>Network info is not available</p>
      )}
    </div>
  );
};

export default NetworkStatus;
