// import React, { useState } from 'react';
// import { isAddress, ethers } from 'ethers'; 
// import { sendTransaction } from './transactionUtils'; 
// import { useWallet } from './context/WalletContext';

// const TransactionSender: React.FC = () => {
//   const { signer } = useWallet();
//   const [recipient, setRecipient] = useState('');
//   const [amount, setAmount] = useState('0.01');
//   const [transactionHash, setTransactionHash] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const isValidAddress = (address: string) => isAddress(address);

//   const handleSendTransaction = async () => {
//     if (!signer) {
//       setError('Signer not available. Please connect your wallet.');
//       return;
//     }

  
//     if (!isValidAddress(recipient)) {
//       setError('Invalid recipient address.');
//       return;
//     }

   
//     const parsedAmount = parseFloat(amount);
//     if (isNaN(parsedAmount) || parsedAmount <= 0) {
//       setError('Please enter a valid amount greater than 0.');
//       return;
//     }

//     try {
//       setLoading(true);
//       setError(null);

      
//       const provider = signer.provider;
//       if (!provider) {
//         setError('Provider is not available.');
//         return;
//       }

//       const address = await signer.getAddress();
//       console.log('Checking balance for address:', address); 

//       const balance = await provider.getBalance(address);
//       console.log('Current balance:', ethers.formatEther(balance));

//       const amountInWei = ethers.parseUnits(amount, 'ether');

      
//       if (balance < amountInWei) {
//         console.log('Insufficient funds'); 
//         setError('Insufficient funds. Please add more ETH to your wallet.');
//         return; 
//       }

   
//       const hash = await sendTransaction(signer, recipient, amountInWei);
//       setTransactionHash(hash);
//     } catch (err: any) {
//       console.error('Transaction error:', err);
//       setError('Transaction failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
//       <h3>Send Transaction</h3>
//       <div style={{ marginBottom: '10px' }}>
//         <label>Recipient Address:</label>
//         <input
//           type="text"
//           value={recipient}
//           onChange={(e) => setRecipient(e.target.value)}
//           placeholder="Enter recipient address"
//           style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//         />
//       </div>
//       <div style={{ marginBottom: '10px' }}>
//         <label>Amount (ETH):</label>
//         <input
//           type="text"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           placeholder="Amount in ETH"
//           style={{ width: '100%', padding: '8px', marginTop: '5px' }}
//         />
//       </div>
//       <button
//         onClick={handleSendTransaction}
//         disabled={loading}
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#007bff',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: loading ? 'not-allowed' : 'pointer',
//         }}
//       >
//         {loading ? 'Sending...' : 'Send Transaction'}
//       </button>

//       {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//       {transactionHash && (
//         <div style={{ marginTop: '20px' }}>
//           <p>Transaction Hash:</p>
//           <a
//             href={`https://etherscan.io/tx/${transactionHash}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: '#007bff' }}
//           >
//             {transactionHash}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransactionSender;




import React, { useState } from 'react';
import { isAddress, ethers } from 'ethers';
import { sendTransaction } from './transactionUtils';
import { useWallet } from './context/WalletContext';

const TransactionSender: React.FC = () => {
  const { signer } = useWallet();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('0.01');
  const [transactionHash, setTransactionHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const isValidAddress = (address: string) => isAddress(address);

  const handleSendTransaction = async () => {
    if (!signer) {
      setError('Signer not available. Please connect your wallet.');
      return;
    }

    if (!isValidAddress(recipient)) {
      setError('Invalid recipient address.');
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid amount greater than 0.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const provider = signer.provider;
      if (!provider) {
        setError('Provider is not available.');
        return;
      }

      const address = await signer.getAddress();
      console.log('Checking balance for address:', address);

      const balance = await provider.getBalance(address);
      console.log('Current balance:', ethers.formatEther(balance));

      const amountInWei = ethers.parseUnits(amount, 'ether');

      if (balance < amountInWei) {
        console.log('Insufficient funds');
        setError('Insufficient funds. Please add more ETH to your wallet.');
        return;
      }

      const hash = await sendTransaction(signer, recipient, amountInWei);
      setTransactionHash(hash);
    } catch (err: any) {
      console.error('Transaction error:', err);
      setError('Transaction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h3 style={{ textAlign: 'center', color: '#333' }}>Send Transaction</h3>

      <div style={{ marginBottom: '15px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '5px',
            fontSize: '14px',
            color: '#555',
          }}
        >
          Recipient Address:
        </label>
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient address"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label
          style={{
            display: 'block',
            marginBottom: '5px',
            fontSize: '14px',
            color: '#555',
          }}
        >
          Amount (ETH):
        </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in ETH"
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <button
          onClick={handleSendTransaction}
          disabled={loading}
          style={{
            padding: '12px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            width: '100%',
            maxWidth: '200px',
            fontSize: '16px',
          }}
        >
          {loading ? 'Sending...' : 'Send Transaction'}
        </button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {transactionHash && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Transaction Hash:</p>
          <a
            href={`https://etherscan.io/tx/${transactionHash}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            {transactionHash}
          </a>
        </div>
      )}
    </div>
  );
};

export default TransactionSender;

