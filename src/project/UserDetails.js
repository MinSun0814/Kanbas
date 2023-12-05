import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';

function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { ...user };
      if (password) {
        updatedUser.password = password;
      }

      const response = await fetch(`http://localhost:4000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Optionally fetch updated user details
      fetchUserDetails();
    } catch (error) {
      setError(error.message);
    }
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div>
        <h2>Account</h2>
        {user ? (
            <form onSubmit={handleUpdate}>
              <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter new password"
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
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
                <input
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-sm btn-primary">
                Update User
              </button>
              <Link to="/project" className="btn btn-sm btn-primary ms-1">
                Sign Out
              </Link>
            </form>
        ) : (
            <p>User not found.</p>
        )}
      </div>
  );
}

export default UserDetails;
