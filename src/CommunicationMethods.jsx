import React from 'react';
import './App.css'; // Import the CSS file

function CommunicationMethods() {
  return (
    <div>
      <div className="companies-header">
        <h2>Communication Methods</h2>
        <button className="add-company-button">+ Add Method</button>
      </div>
      <table className="companies-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Sequence</th>
            <th>Mandatory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>LinkedIn Post</td>
            <td>Share or interact with company posts on LinkedIn</td>
            <td>1</td>
            <td>Yes</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>LinkedIn Message</td>
            <td>launch the grand iphone 16</td>
            <td>2</td>
            <td>Yes</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>cancelled freshers hiring</td>
            <td>3</td>
            <td>Yes</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CommunicationMethods;
