import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup functionality (registration logic goes here)
    console.log('Signing up with:', username, email, password);
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

