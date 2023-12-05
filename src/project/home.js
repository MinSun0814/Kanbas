import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', password: '', email: '', role: 'USER' });
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to create user');
      }

      const createdUser = await response.json();
      setUsers([...users, createdUser]);
      setShowCreateForm(false);
      setNewUser({ username: '', password: '', email: '', role: 'USER' });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setEditedUser({ ...user });
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${editingUserId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      setEditingUserId(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleCancelClick = () => {
    setEditingUserId(null);
  };

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
      <div>
        <h1>Users</h1>
        <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className={`btn ${showCreateForm ? 'btn-secondary' : 'btn-primary'} btn-sm`}
        >
          {showCreateForm ? 'Hide Create' : 'Create'}
        </button>

        {showCreateForm && (
            <form onSubmit={handleCreateUser}>
              {/* Form fields for new user creation */}
              <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                />
                <select
                    name="role"
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                >
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                </select>
              </div>
              <button type="submit" className="btn btn-sm btn-primary">Create User</button>
              {error && <div className="error-message">{error}</div>}
            </form>
        )}

        <table className="table">
          <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {users.map(user => (
              <tr key={user._id}>
                {editingUserId === user._id ? (
                    // Edit mode
                    <>
                      <td><input type="text" name="username" value={editedUser.username} onChange={handleInputChange} /></td>
                      <td><input type="text" name="firstName" value={editedUser.firstName} onChange={handleInputChange} /></td>
                      <td><input type="text" name="lastName" value={editedUser.lastName} onChange={handleInputChange} /></td>
                      <td><input type="email" name="email" value={editedUser.email} onChange={handleInputChange} /></td>
                      <td>
                        <select name="role" value={editedUser.role} onChange={handleInputChange}>
                          <option value="ADMIN">Admin</option>
                          <option value="FACULTY">Faculty</option>
                          <option value="STUDENT">Student</option>
                        </select>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-success me-2" onClick={handleSaveClick}>Save</button>
                        <button className="btn btn-sm btn-secondary" onClick={handleCancelClick}>Cancel</button>
                      </td>
                    </>
                ) : (
                    // Display mode
                    <>
                      <td>{user.username}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() => handleEditClick(user)}
                        >
                          Update
                        </button>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleDeleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                )}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default Home;
