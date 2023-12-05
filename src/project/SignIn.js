import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await fetch('http://localhost:4000/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to sign in');
      }
      const user = await response.json();
      navigate(`/users/${user._id}`);
    } catch (error) {
      console.error('Error during sign-in:', error);
      setErrorMessage(error.message);
    }
  };


  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Sign in
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* error message */}
      </form>
  );
}

export default SignIn;
