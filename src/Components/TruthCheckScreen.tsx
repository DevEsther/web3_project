// File: src/components/TruthCheckScreen.tsx

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import MainLayout from './MainLayout';
import ConnectWalletModal from './ConnectWalletModal';
import cloudImage from '../assets/rain.png';
import documentIcon from '../assets/Frame 329 (5).png';

const TruthCheckScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleNextPage = () => {
    setIsModalOpen(true);
  };

  const handleSkip = () => {
    navigate('/dashboard'); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  return (
    <MainLayout>
      <div
        className="container-fluid"
        style={{
          minHeight: '100vh',
          color: 'black',
          padding: '20px',
          backgroundColor: 'transparent',
        }}
      >
        <div className="row">
       
          <div
            className="col-md-6 d-flex flex-column align-items-center justify-content-center"
            style={{
              animation: animationTriggered ? 'fadeInLeft 1s ease-in-out forwards' : '',
              marginTop: '50px',
              color: 'white',
            }}
          >
            <img
              src={cloudImage}
              alt="Cloud with Glowing Lines"
              style={{ maxWidth: '300px', marginBottom: '30px' }}
            />
            <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Learn How TruthCheck Works</h1>
            <p style={{ fontSize: '1em', textAlign: 'center' }}>
              Quickly understand how AI, blockchain, and community power come together to help you verify anything - safely and transparently.
            </p>
          </div>

        
          <div
            className="col-md-6 d-flex flex-column align-items-center justify-content-center"
            style={{
              animation: animationTriggered ? 'slideInRight 1s ease-in-out forwards' : '',
            }}
          >
            <button
              style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                marginBottom: '20px',
                width: '200px',
              }}
              onClick={() => setIsModalOpen(true)} 
            >
              Connect Wallet
            </button>
            <div
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '500px',
                height: 'auto',
                marginBottom: '20px',
              }}
            >
              <div style={{ flex: 1, textAlign: 'left', marginRight: '20px' }}>
                <h2 style={{ color: 'black', fontSize: '1.5em' }}>What is TruthCheck?</h2>
                <p style={{ color: 'black', fontSize: '1em' }}>Verify Anything with TruthCheck</p>
                <p style={{ color: 'black', fontSize: '0.8em' }}>
                  Use AI + Community Power to uncover fake news fast.
                </p>
              </div>
              <img
                src={documentIcon}
                alt="Document with AI Icon"
                style={{ maxWidth: '100px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <button
                style={{
                  backgroundColor: 'transparent',
                  color: 'black',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px 10px',
                }}
                onClick={handleSkip}
              >
            
              </button>
              <span>...</span>
              <button
                style={{
                  backgroundColor: '#61dafb',
                  color: 'black',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px 10px',
                }}
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ConnectWalletModal onClose={closeModal} />}

    
      <style>
        {`
          /* Fade In Animation for Left Section */
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Slide In Animation for Right Section */
          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </MainLayout>
  );
};

export default TruthCheckScreen;
