// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await axios.get('http://localhost:3000/api/check-auth', { withCredentials: true });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuthStatus();
  }, []);

  const login = async (email, password) => {
    await axios.post('http://localhost:3000/api/login', { email, password }, { withCredentials: true });
    setIsAuthenticated(true);
  };

  const signup = async (username, email, password) => {
    await axios.post('http://localhost:3000/api/signup', { username, email, password }, { withCredentials: true });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await axios.post('http://localhost:3000/api/logout', {}, { withCredentials: true });
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login,signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
