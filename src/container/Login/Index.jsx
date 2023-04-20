import React from "react";
import Button from "@mui/material/Button";
import background from "../../assets/Images/bgimg.avif";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  Box,
  Card,
  CardMedia,
  Checkbox,
  Container,
  FilledInput,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
  colors,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LogContainer from "../RegisterContainer/Index";
import styled from "@emotion/styled";
import { theme } from "../../theme/Index";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AccountCircleIcon color="secondary" sx={{ fontSize: "60px" }} />
        <Typography variant="h5">LET'S GET STARTED NOW!</Typography>
        <Typography variant="subtitle2" gutterBottom>
          or create an account if not registred yet
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
          <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Box sx={{ textAlign: "end", mt: 2 }}>
            <NavLink to="/Forgot" variant="body2">
              Forgot password?
            </NavLink>
          </Box>

          <Button
            type="submit"
            fullWidth
            component={NavLink}
            to="/home"
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
          >
            lOG IN
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <p>Don't have account yet?</p>
            <NavLink to="/Register" variant="body2">
              REGISTER
            </NavLink>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
