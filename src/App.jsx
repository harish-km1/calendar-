import React, { useState } from 'react';
import './App.css';
import AdminPanel from './AdminPanel';
import UserPanel from './UserPanel';
import ReportsPanel from './ReportsPanel';
import DashboardPanel from './DashboardPanel';
import CalendarPanel from './CalendarPanel';
import NotificationsPanel from './NotificationsPanel';
import CommunicationMethods from './CommunicationMethods';

function App() {
  const [activeTab, setActiveTab] = useState('companies');
  const [activeSidebar, setActiveSidebar] = useState('admin');
  const [companyCommunications, setCompanyCommunications] = useState([
    {
      company: 'ENTNT',
      location: 'Abu Dhabi',
      lastCommunications: [
        { type: 'LinkedIn Post', date: '12/20/2024' },
        { type: 'Email', date: '12/15/2024' },
      ],
      nextDue: { type: 'LinkedIn Post', date: '12/20/2024' },
    },
    {
      company: 'GOOGLE',
      location: 'California, US',
      lastCommunications: [
        { type: 'Email', date: '12/25/2024' },
        { type: 'Webinar', date: '12/20/2024' },
      ],
      nextDue: { type: 'Email', date: '12/25/2024' },
    },
    {
      company: 'MICROSOFT',
      location: 'Washington, US',
      lastCommunications: [
        { type: 'Email', date: '12/26/2024' },
        { type: 'Conference Call', date: '12/19/2024' },
      ],
      nextDue: { type: 'Email', date: '12/26/2024' },
    },
    {
      company: 'AMAZON',
      location: 'Seattle, us',
      lastCommunications: [
        { type: 'Email', date: '12/28/2024' },
        { type: 'Newsletter', date: '12/21/2024' },
        { type: 'Phone Call', date: '12/17/2024' },
      ],
      nextDue: { type: 'Email', date: '12/28/2024' },
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <aside className="sidebar">
        <button
          className={`sidebar-button ${activeSidebar === 'admin' ? 'active' : ''}`}
          onClick={() => setActiveSidebar('admin')}
        >
          Admin
        </button>

        <button
          className={`sidebar-button ${activeSidebar === 'user' ? 'active' : ''}`}
          onClick={() => setActiveSidebar('user')}
        >
          User
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveSidebar('reports')}
        >
          Reports
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveSidebar('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveSidebar('calendar')}
        >
          Calendar
        </button>
        <button
          className={`sidebar-button ${activeSidebar === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveSidebar('dashboard')}
        >
          Notifications
        </button>
      </aside>
      <div className={`main-content ${activeSidebar === 'user' || activeSidebar === 'reports' || activeSidebar === 'dashboard' || activeSidebar === 'calendar' || activeSidebar === 'notifications' ? 'full-screen-active' : ''}`}>
        {activeSidebar !== 'calendar' && activeSidebar !== 'dashboard' && (
          <header>
            <h1>HARISH KM</h1>
            <div className="tabs">
              <button
                className={`tab ${activeTab === 'companies' ? 'active' : ''}`}
                onClick={() => setActiveTab('companies')}
              >
                Company Management
              </button>
              <button
                className={`tab ${activeTab === 'methods' ? 'active' : ''}`}
                onClick={() => setActiveTab('methods')}
              >
                Communication Methods
              </button>
            </div>
          </header>
        )}
        {activeSidebar === 'user' && <div className="full-screen-message">This is user button</div>}
        {activeSidebar === 'reports' && <div className="full-screen-message">This is reports button</div>}
         {activeSidebar === 'dashboard' && (
          <div className="dashboard-container">
            <div className="dashboard-header">
              <h2>Company Communications</h2>
              <button className="add-communication-button" onClick={() => setIsModalOpen(true)}>+ Communication Performed</button>
            </div>
            <table className="communications-table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Company</th>
                  <th>Last 5 Communications</th>
                  <th>Next Due</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    ENTNT
                    <br />
                    Abu Dhabi
                  </td>
                  <td>
                    LinkedIn Post
                    <br />
                    12/20/2024
                    <br />
                    Email
                    <br />
                    12/15/2024
                  </td>
                  <td>
                    LinkedIn Post
                    <br />
                    12/20/2024
                    <br />
                    Disable Highlight
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    GOOGLE
                    <br />
                    California, US
                  </td>
                  <td>
                    Email
                    <br />
                    12/25/2024
                    <br />
                    Webinar
                    <br />
                    12/20/2024
                  </td>
                  <td>
                    Email
                    <br />
                    12/25/2024
                    <br />
                    Disable Highlight
                  </td>
                </tr>
                 <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    MICROSOFT
                    <br />
                    Washington, US
                  </td>
                  <td>
                    Email
                    <br />
                    12/26/2024
                     <br />
                    Conference Call
                    <br />
                    12/19/2024
                  </td>
                  <td>
                    Email
                    <br />
                    12/26/2024
                    <br />
                    Disable Highlight
                  </td>
                </tr>
                 <tr>
                  <td><input type="checkbox" /></td>
                  <td>
                    AMAZON
                    <br />
                    Seattle, us
                  </td>
                  <td>
                    Email
                    <br />
                    12/28/2024
                     <br />
                    Newsletter
                    <br />
                    12/21/2024
                     <br />
                    Phone Call
                    <br />
                    12/17/2024
                  </td>
                  <td>
                    Email
                    <br />
                    12/28/2024
                    <br />
                    Disable Highlight
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeSidebar === 'calendar' && (
          <div className="calendar-container">
            <CalendarPanel communications={companyCommunications} />
          </div>
        )}
        {activeSidebar === 'notifications' && <div className="full-screen-message">This is notifications button</div>}
        {activeSidebar === 'admin' && (
          <main>
            {activeTab === 'methods' && <CommunicationMethods />}
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
