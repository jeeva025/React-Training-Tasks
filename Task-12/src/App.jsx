import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });
  
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch data');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateClick = () => {
    setEditingId(null);
    setFormData({ name: '', email: '', phone: '', website: '' });
    setShowForm(true); 
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website
    });
    setShowForm(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${editingId}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((response) => response.json())
        .then((updatedUser) => {
          setUsers(users.map((user) => (user.id === editingId ? updatedUser : user)));
          setShowForm(false); 
        });
    } else {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
        .then((response) => response.json())
        .then((newUser) => {
          newUser.id = users.length+1; 
          setUsers([...users, newUser]);
          setShowForm(false); 
        });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setUsers(users.filter((user) => user.id !== id));
        });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1>User Management (CRUD Operations)</h1>

      {loading && <p className="message">Loading data...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {/* NEW: Button to trigger the Create User popup */}
      {!loading && !error && (
        <button className="add-new-btn" onClick={handleCreateClick}>
          + Create New User
        </button>
      )}

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleInputChange}
                required
              />
              
              <div className="modal-actions">
                <button type="submit" className={editingId ? 'update-btn' : 'add-btn'}>
                  {editingId ? 'Update' : 'Save'}
                </button>
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td className="action-buttons">
                    <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <p className="message">No users found.</p>}
        </div>
      )}
    </div>
  );
}

export default App;