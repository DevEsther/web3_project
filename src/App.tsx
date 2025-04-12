import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TruthCheckLanding from './Components/TruthCheckLanding';
import TruthCheckScreen from './Components/TruthCheckScreen';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TruthCheckLanding />} />
        <Route path="/verify" element={<TruthCheckScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
