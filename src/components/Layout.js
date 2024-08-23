import React from 'react';
import { Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '64px', // Adjust the height as needed
          borderBottom: '2px solid #ddd', // Light gray border at the bottom
          backgroundColor: 'transparent', // No background color
        }}
      >
        {/* <Link
          to="index-base-schema"
          style={{
            textDecoration: 'none',
            padding: '8px 16px',
            color: '#000', // Text color
            border: '1px solid #ddd', // Border for button look
            borderRadius: '4px', // Rounded corners
            backgroundColor: '#f0f0f0', // Light background color for button
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e0e0e0';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
          }}
        >
          Conditional Validation
        </Link> */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            padding: '8px 16px',
            color: '#000',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: '#f0f0f0',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e0e0e0';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
          }}
        >
          Signup
        </Link>
      </Toolbar>
      {/* Main content would go here */}
      {children}
    </Box>
  );
};
