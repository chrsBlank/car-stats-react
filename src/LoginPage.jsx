import React, { useState } from 'react';
import axios from 'axios'; // You need to install Axios



function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('username', username);
      const response = await axios.post('http://localhost:8520/login', {
        "username": username,
        "password": password,
      })
      if (response.status !== 200) {
        throw new Error('Login failed');
      }

      const token = response.data.token;
      localStorage.setItem('token', token);

      // Redirect to the next page upon successful login
      //redirect to DataEntryPage
      // You can use React Router for navigation.

      console.log('token', token);

    } catch (error) {
      // Handle login errors, e.g., display an error message to the user
      <label> Login failed </label>
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
