import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({ username: '', password: '', email: '', role: 'USER' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    try {
      const response = await fetch('http://localhost:4000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        credentials: 'include' // Include credentials for session cookies
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to sign up');
      }

      const createdUser = await response.json();
      // Navigate to the UserDetails page for the newly created user
      navigate(`/users/${createdUser._id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
          />
        </div>
        <div>
          <label>Role:</label>
          <select
              name="role"
              value={user.role}
              onChange={handleChange}
          >
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Sign up
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
  );
}

export default Signup;
