// Inside Home.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import TruthCheckLanding from './TruthCheckLanding';
import VerificationScreen from './TruthCheckScreen';

const Home: React.FC = () => {
  const location = useLocation();

  if (location.pathname === '/verify') {
    return <VerificationScreen />;
  }

  return <TruthCheckLanding />;
};

export default Home;
