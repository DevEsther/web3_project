import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TruthCheckLanding from './Components/TruthCheckLanding';
import TruthCheckScreen from './Components/TruthCheckScreen';
import Dashboard from './Components/Dashboard'; // Import your Dashboard component
import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/" element={<TruthCheckLanding />} />
        <Route path="/verify" element={<TruthCheckScreen />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add this route for the dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
