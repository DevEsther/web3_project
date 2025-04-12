// src/components/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', backgroundColor: '#282c34', color: 'white', height: '100vh', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '200px', backgroundColor: '#1e2127', padding: '20px' }}>
        <div style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-chart-line" style={{ marginRight: '10px' }}></i> Dashboard
        </div>
        <div style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-file-alt" style={{ marginRight: '10px' }}></i> Evidence
        </div>
        <div style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-gavel" style={{ marginRight: '10px' }}></i> Governance
        </div>
        <div style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-exclamation-triangle" style={{ marginRight: '10px' }}></i> Claims
        </div>
        <div style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-user-circle" style={{ marginRight: '10px' }}></i> Identity
        </div>
        <div style={{ padding: '10px', cursor: 'pointer', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
          <i className="fas fa-cog" style={{ marginRight: '10px' }}></i> Settings
        </div>
      </aside>

      <main style={{ flexGrow: 1, padding: '20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>TruthCheck</div>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3a3f4b', padding: '8px', borderRadius: '5px' }}>
            <i className="fas fa-search" style={{ marginRight: '8px' }}></i>
            <input type="text" placeholder="Search fake news or claims" style={{ background: 'none', border: 'none', color: 'white', outline: 'none' }} />
          </div>
        </header>

        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#353C4A', padding: '20px', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Claims Submitted<br />12</div>
          <div style={{ backgroundColor: '#353C4A', padding: '20px', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Verified Claims<br />8</div>
          <div style={{ backgroundColor: '#353C4A', padding: '20px', borderRadius: '5px', textAlign: 'center', width: '150px' }}>Trust Score<br />75%</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div style={{ backgroundColor: '#353C4A', padding: '15px', borderRadius: '5px', textAlign: 'left' }}>
            <img src="tinubu.jpg" alt="Tinubu" style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '5px' }} />
            <p style={{ margin: '0' }}>Let The Poor brief. We Have That Responsibility - Tinubu tells Nigerians</p>
          </div>
          <div style={{ backgroundColor: '#353C4A', padding: '15px', borderRadius: '5px', textAlign: 'left' }}>
            <img src="group.jpg" alt="Group" style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '5px' }} />
            <p style={{ margin: '0' }}>Tinubu to governors: Do more for the people - it's time to take Nigeria to promised land | TruthCheck</p>
          </div>
          <div style={{ backgroundColor: '#353C4A', padding: '15px', borderRadius: '5px', textAlign: 'left' }}>
            <img src="interac.jpg" alt="Interac" style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '5px' }} />
            <p style={{ margin: '0' }}>Interact</p>
          </div>
          <div style={{ backgroundColor: '#353C4A', padding: '15px', borderRadius: '5px', textAlign: 'left' }}>
            <img src="news.jpg" alt="News" style={{ width: '100%', height: 'auto', marginBottom: '10px', borderRadius: '5px' }} />
            <p style={{ margin: '0' }}>News</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;