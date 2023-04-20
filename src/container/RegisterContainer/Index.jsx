import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ThemeProvider } from '@emotion/react';
import {theme } from '../../theme/Index.js'


export default function LogContainer() {


    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <>  
 
    <ThemeProvider theme={theme}>
        <AccountCircleIcon color="secondary"  sx={{ fontSize:"60px"}}/>
  <Typography variant="h4">REGISTER HERE!</Typography>
  <Typography variant="subtitle1" gutterBottom>
    Welcome To E-commarce
  </Typography>

  <Box
    component="form"
    noValidate
    onSubmit={handleSubmit}
    sx={{ mt: 1 }}
  >
    <Box>
      <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Enter Name"
      name="email"
      autoComplete="email"
      autoFocus
    /> 
     
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    
    </Box>
    <Button
      type="submit"
      fullWidth
      component={NavLink}
      variant="contained"
      color='secondary'
      sx={{ mt: 3, mb: 2 }}
      to="/"
    >
            Send Password
    </Button>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
      }}
    >
      
    </Box>
  </Box>
  </ThemeProvider>   
    </>
  )
}
