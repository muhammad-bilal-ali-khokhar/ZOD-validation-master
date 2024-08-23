// pages/ConfirmationPage.js

import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const ConfirmationPage = () => {

  return (
    <Container maxWidth='sm'>
      <Paper
        elevation={3}
        sx={{ padding: 3, marginTop: 5, textAlign: "center" }}>
        <Typography variant='h4' gutterBottom>
          Form Submitted Successfully
        </Typography>
        <Typography variant='body1' paragraph>
          Thank you for submitting the form. We have received your details.
        </Typography>
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
      </Paper>
    </Container>
  );
};
