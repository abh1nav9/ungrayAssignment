// src/pages/Auth.jsx

import React, { useState } from 'react';

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'trial' && password === 'assignment123') {
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Welcome Back</h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white rounded-md w-full py-3 hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
    