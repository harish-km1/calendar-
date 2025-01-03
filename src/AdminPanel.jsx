import React, { useState } from 'react';
import CommunicationMethods from './CommunicationMethods';

function AdminPanel() {
    const [activeTab, setActiveTab] = useState('companies');
    const [companies, setCompanies] = useState([
        { name: 'ENTNT', location: 'Abu Dhabi', communicationPeriod: 'Every 7 days' },
        { name: 'APPLE', location: 'California, US', communicationPeriod: 'Every 9 days' },
        { name: 'TATA', location: 'Bangalore, India', communicationPeriod: 'Every 17 days' },
    ]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newCompany, setNewCompany] = useState({ name: '', location: '', communicationPeriod: '' });
    const [editCompanyIndex, setEditCompanyIndex] = useState(null);
    const [editCompany, setEditCompany] = useState({ name: '', location: '', communicationPeriod: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCompany(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddCompany = () => {
        setCompanies(prevCompanies => [...prevCompanies, newCompany]);
        setNewCompany({ name: '', location: '', communicationPeriod: '' });
        setShowAddForm(false);
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditCompany(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateCompany = () => {
        const updatedCompanies = [...companies];
        updatedCompanies[editCompanyIndex] = editCompany;
        setCompanies(updatedCompanies);
        setEditCompanyIndex(null);
        setEditCompany({ name: '', location: '', communicationPeriod: '' });
    };

    const handleDeleteCompany = (index) => {
        const updatedCompanies = companies.filter((_, i) => i !== index);
        setCompanies(updatedCompanies);
    };

    return (
        <main>
            {activeTab === 'companies' && (
                <div>
                    <div className="companies-header">
                        <h2>Companies</h2>
                        <button className="add-company-button" onClick={() => {
                            window.location.href = '/add-company';
                        }}>+ Add Company</button>
                    </div>
                    {showAddForm && (
                        <div className="add-company-form">
                            <h3>Add New Company</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={newCompany.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={newCompany.location}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="communicationPeriod"
                                placeholder="Communication Period"
                                value={newCompany.communicationPeriod}
                                onChange={handleInputChange}
                            />
                            <button onClick={handleAddCompany}>Add Company</button>
                            <button onClick={() => setShowAddForm(false)}>Cancel</button>
                        </div>
                    )}
                    {editCompanyIndex !== null && (
                        <div className="edit-company-form">
                            <h3>Edit Company</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={editCompany.name}
                                onChange={handleEditInputChange}
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={editCompany.location}
                                onChange={handleEditInputChange}
                            />
                            <input
                                type="text"
                                name="communicationPeriod"
                                placeholder="Communication Period"
                                value={editCompany.communicationPeriod}
                                onChange={handleEditInputChange}
                            />
                            <button onClick={handleUpdateCompany}>Update Company</button>
                            <button onClick={() => setEditCompanyIndex(null)}>Cancel</button>
                        </div>
                    )}
                    <table className="companies-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Communication Period</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company, index) => (
                                <tr key={index}>
                                    <td>{company.name}</td>
                                    <td>{company.location}</td>
                                    <td>{company.communicationPeriod}</td>
                                    <td>
                                        <button onClick={() => {
                                            setEditCompanyIndex(index);
                                            setEditCompany(company);
                                        }}>Edit</button>
                                        <button onClick={() => handleDeleteCompany(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {activeTab === 'methods' && <CommunicationMethods />}
        </main>
    );
}

export default AdminPanel;
