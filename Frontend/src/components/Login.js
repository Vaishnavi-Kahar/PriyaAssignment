// // src/components/Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async () => {
      try {
        await login(email, password);
        navigate('/');
      } catch (error) {
        console.error('Login failed', error);
      }
  };

  return (
    <Container maxWidth="xs">
      <div>
        <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </div>
    </Container>
  );
}