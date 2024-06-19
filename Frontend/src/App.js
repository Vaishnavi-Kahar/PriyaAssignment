import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import { AuthProvider, AuthContext } from '../src/context/AuthContext';
import QRGenerator from '../src/components/QRGenerator';
import QRScanner from '../src/components/QRScanner';
import AdminDashboard from '../src/components/AdminDashboard';
import Signup from '../src/components/Signup';

import Login from '../src/components/Login';
import Navbar from './components/Navbar';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<QRGenerator />} />
          <Route path="/scan" element={<QRScanner />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
