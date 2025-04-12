import React, { useState } from 'react';
import ConnectWalletModal from '../Components/ConnectWalletModal'; 
const ParentComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

 
  const openModal = () => setShowModal(true);


  const closeModal = () => setShowModal(false);

  return (
    <div>
    
      <button onClick={openModal}>Connect Wallet</button>

      {showModal && (
        <ConnectWalletModal
          onClose={() => {
            closeModal(); 
          }}
        />
      )}
    </div>
  );
};

export default ParentComponent;
