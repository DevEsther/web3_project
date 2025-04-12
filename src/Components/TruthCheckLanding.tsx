// File: src/components/TruthCheckLanding.tsx

import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import illustration from '../assets/purpl.png';
import { useNavigate } from 'react-router-dom';
import MainLayout from './MainLayout';

const TruthCheckLanding: React.FC = () => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.animation = 'fadeIn 1s ease-out';
    }
    if (textRef.current) {
      textRef.current.style.animation = 'slideInLeft 1s ease-out';
    }
    if (boxesRef.current) {
      boxesRef.current.style.animation = 'slideInRight 1s ease-out';
    }
    if (buttonRef.current) {
      buttonRef.current.style.animation = 'fadeInUp 1s ease-out';
    }
  }, []);

  const handleStartVerification = () => {
    navigate('/verify');
  };

  return (
    <MainLayout>
      <div className="row px-4 d-flex align-items-center justify-content-center mt-2">
      
        <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center" style={{ marginTop: '-60px' }}>
          <img
            ref={imageRef}
            src={illustration}
            alt="Blockchain Illustration"
            className="img-fluid mb-3"
            style={{ maxWidth: '60%', borderRadius: '20px' }}
          />
          <div ref={textRef}>
            <h1 className="fw-bold mb-2" style={{ fontSize: '1.8rem' }}>
              TruthCheck runs on blockchain to protect your truth.
            </h1>
            <p className="text-white-50 mb-0">
              Verify news. Earn trust. Own your reputation — All Secured By Blockchain.
            </p>
          </div>
        </div>

       
        <div ref={boxesRef} className="col-md-6 col-sm-12 d-flex flex-column justify-content-start mt-5">
          <div className="mb-3 p-3 bg-dark rounded-4 d-flex align-items-center">
            <i className="bi bi-wallet2 me-3 fs-5 text-white"></i>
            <span>Use your wallet to sign in securely</span>
          </div>
          <div className="mb-3 p-3 bg-dark rounded-4 d-flex align-items-center">
            <i className="bi bi-search me-3 fs-5 text-white"></i>
            <span>Submit truth or verify others' claims</span>
          </div>
          <div className="mb-4 p-3 bg-dark rounded-4 d-flex align-items-center">
            <i className="bi bi-shield-check me-3 fs-5 text-white"></i>
            <span>Track your verification’s journey on the blockchain</span>
          </div>

          <button ref={buttonRef} className="btn btn-light rounded-pill px-4 fw-semibold" onClick={handleStartVerification}>
            Start Verifying →
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default TruthCheckLanding;
