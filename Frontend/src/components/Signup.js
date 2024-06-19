// // src/components/Signup.js
// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   const handleSignup = async () => {
    try {
      await axios.post('http://localhost:3000/api/signup', { username,email, password });
      navigate('/');
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <div>
        <Typography variant="h4" align="center" style={{ margin: '20px 0' }}>
          Sign Up
        </Typography>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </div>
    </Container>
  );
}

