import React from 'react';

function NotificationsPanel({ communications }) {
  const today = new Date();
  const overdueCommunications = communications ? communications.filter(comm => new Date(comm.nextDue.date) < today) : [];
  const dueTodayCommunications = communications ? communications.filter(comm => new Date(comm.nextDue.date).toDateString() === today.toDateString()) : [];

  return (
    <main className="notifications-panel">
      <div className="overdue-communications">
        <div className="panel-header">
          <i className="fas fa-exclamation-triangle"></i> {/* Placeholder for icon */}
          <h3>Overdue Communications</h3>
        </div>
        {overdueCommunications.length > 0 ? (
          <ul className="communications-list">
            {overdueCommunications.map((comm, index) => (
              <li key={index} className="communication-item overdue">
                <div className="company-info">
                  <h4>{comm.company}</h4>
                  <p>Last Communication: {comm.lastCommunications[0]?.date}</p>
                  {/* Calculate days overdue */}
                  <p>{Math.floor((today - new Date(comm.lastCommunications[0]?.date)) / (1000 * 60 * 60 * 24))} days overdue</p>
                </div>
                <button className="disable-highlight-button">Disable Highlight</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No overdue communications.</p>
        )}
      </div>

      <div className="due-today-communications">
        <div className="panel-header">
          <i className="fas fa-clock"></i> {/* Placeholder for icon */}
          <h3>Due Today</h3>
        </div>
        {dueTodayCommunications.length > 0 ? (
          <ul className="communications-list">
            {dueTodayCommunications.map((comm, index) => (
              <li key={index} className="communication-item due-today">
                <div className="company-info">
                  <h4>{comm.company}</h4>
                  <p>Last Communication: {comm.lastCommunications[0]?.date}</p>
                </div>
                <button className="disable-highlight-button">Disable Highlight</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No communications due today.</p>
        )}
      </div>
    </main>
  );
}

export default NotificationsPanel;
