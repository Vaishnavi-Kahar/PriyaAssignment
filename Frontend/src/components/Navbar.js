import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
// import pic from '../Images/avatar.jpeg';
// import './Navbar.css';

const CustomButton = styled(Button)`
  color: white;
  font-family: Arial, sans-serif;
  /* text-transform: none; */
  /* z-index:10; */
  margin-left: 10px;
  margin-right: 10px;
  &:hover {
    background-color: #3963cd;
  }
`;

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: '30%' }}>
        <Toolbar sx={{ background: "#021323", color: "white", fontWeight: 'bold' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
          </Typography>
          <CustomButton component={Link} to="/" > QR Generator</CustomButton>
          <CustomButton component={Link} to="/scan">QR Scanner</CustomButton>
          <CustomButton component={Link} to="/login">Login</CustomButton>
          <CustomButton component={Link} to="/signup">Sign Up</CustomButton>
          <CustomButton component={Link} to="/more">More</CustomButton>

          {/* <Avatar alt="User Avatar" className="av"  sx={{ marginLeft: '10px' }} /> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
