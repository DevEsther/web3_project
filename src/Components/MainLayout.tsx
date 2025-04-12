import React, { ReactNode, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/Vector.png';
import ConnectWalletModal from './ConnectWalletModal';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="container-fluid"
      style={{
        background: 'linear-gradient(135deg, #0d1b2a, #1b263b)',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
 
      <div className="d-flex align-items-center px-4 py-3">
        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: 'white',
            padding: '5px 15px',
            borderRadius: '10px',
          }}
        >
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
        </div>

        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '10px' }}>
          <span style={{ color: '#0066cc' }}>Truth</span>
          <span style={{ color: '#ffffff' }}>Check</span>
        </span>

        <button
          className="btn btn-light rounded-pill px-4 fw-semibold ms-auto"
          onClick={openModal}
        >
          Connect Wallet
        </button>
      </div>

      {children}

      {isModalOpen && <ConnectWalletModal onClose={closeModal} />}
    </div>
  );
};

export default MainLayout;
