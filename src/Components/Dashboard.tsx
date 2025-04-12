import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import tinubuImage from '../assets/image 6.png';
import groupImage from '../assets/Frame 438.png';
import interacImage from '../assets/WhatsApp Image 2025-04-12 at 10.14.09_aacd2464.jpg';
import newsImage from '../assets/PET.jpg';
import logoImage from '../assets/Vector.png';

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <style>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background-color: #1E3A8A;
          color: white;
      }

        .sidebar {
          width: 200px;
          background-color: #1A2A6C;
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: left 0.3s ease;
        }

        .sidebar-item {
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .hamburger-btn {
          display: none; /* Hidden by default */
          position: fixed;
          top: 15px;
          left: 15px;
          background-color: #2A3D70;
          padding: 10px 15px;
          font-size: 20px;
          color: white;
          border-radius: 5px;
          z-index: 1000;
          cursor: pointer;
        }

        .main-content {
          flex-grow: 1;
          padding: 20px;
        }

        .stats-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 20px 0;
        }

        .stats-card {
          background: #2A3D70;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          width: 150px;
          margin: 10px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .card {
          background-color: #2A3D70;
          padding: 20px;
          border-radius: 5px;
        }

        .card-img {
          width: 100%;
          max-height: 250px;
          object-fit: cover;
          border-radius: 5px;
          margin-bottom: 10px;
        }

        .card p {
          color: white; /* Set text color to white */
          font-size: 1rem; /* Optional: Adjust the font size */
        }

        /* Show hamburger button and adjust positioning on small screens */
        @media (max-width: 768px) {
          .hamburger-btn {
            display: block; /* Show hamburger button on small screens */
            top: 15px;
            left: 15px;
            background-color: #2A3D70;
            padding: 10px 15px;
            font-size: 20px;
            color: white;
            border-radius: 5px;
            z-index: 1000;
            cursor: pointer;
          }

          .sidebar {
            position: fixed;
            top: 0;
            left: -220px;
            height: 100%;
            z-index: 999;
          }

          .sidebar.show {
            left: 0;
          }

          .main-content {
            padding-top: 70px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dashboard-container">
        <div className="hamburger-btn" onClick={() => setShowSidebar(!showSidebar)}>
          ☰
        </div>

        <aside className={`sidebar ${showSidebar ? 'show' : ''}`}>
          <div className="sidebar-item"><i className="fas fa-chart-line" /> Dashboard</div>
          <div className="sidebar-item"><i className="fas fa-file-alt" /> Evidence</div>
          <div className="sidebar-item"><i className="fas fa-gavel" /> Governance</div>
          <div className="sidebar-item"><i className="fas fa-exclamation-triangle" /> Claims</div>
          <div className="sidebar-item"><i className="fas fa-user-circle" /> Identity</div>
          <div className="sidebar-item"><i className="fas fa-cog" /> Settings</div>
        </aside>

        <main className="main-content">
          <header>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px' }}>
              <img src={logoImage} alt="Logo" style={{ width: 30, height: 30, marginRight: 10, background: 'white', padding: 5, borderRadius: 5 }} />
              <span style={{ color: 'blue' }}>Truth</span><span style={{ color: 'white' }}>Check</span>
            </div>
            <div style={{ background: 'white', color: 'black', padding: 10, borderRadius: 5, display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-search" style={{ marginRight: 10 }} />
              <input type="text" placeholder="Search fake news or claims" style={{ border: 'none', outline: 'none', width: '100%' }} />
            </div>
          </header>

          <div className="stats-container">
            <div className="stats-card">Claims Submitted<br />12</div>
            <div className="stats-card">Verified Claims<br />8</div>
            <div className="stats-card">Trust Score<br />75%</div>
          </div>

          <div className="cards-grid">
            <div className="card">
              <img src={tinubuImage} alt="Tinubu" className="card-img" />
              <p>Let The Poor brief. We Have That Responsibility - Tinubu tells Nigerians</p>
            </div>
            <div className="card">
              <img src={groupImage} alt="Group" className="card-img" />
              <p>Tinubu to governors: Do more for the people - it's time to take Nigeria to promised land | TruthCheck</p>
            </div>
            <div className="card">
              <img src={interacImage} alt="Interact" className="card-img" />
              <p>Interact</p>
            </div>
            <div className="card">
              <img src={newsImage} alt="News" className="card-img" />
              <p>News</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
