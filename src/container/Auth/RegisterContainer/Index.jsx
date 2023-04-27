
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from 'react';
import { NavLink } from "react-router-dom";
import { theme } from "../../../utils/theme/Index";
import Snackbar from "@mui/material/Snackbar";
import { isValidEmail, isValidPassword,TransitionRight } from "../../../utils/helper";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,

} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { UserContext } from "../../../App";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Login() {
  const [Register,setRegister]=useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [Error, setError] = React.useState({
      emailError:false,
      passwordError:false,
  });
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });
  const [snackbarShow, setsnackbarShow] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
      setsnackbarShow(true);
   
  };

  const handleClose = () => {
    setsnackbarShow(false);
  };


  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value });
    if (!isValidEmail(loginData.email)) {
      Error.emailError=true
      setError({...Error});
    }
    else if (loginData.email === "") {
      Error.emailError=true
      setError({...Error});
    }
    else{
      Error.emailError=false
      setError({...Error});
    }
     if(!isValidPassword(loginData.password))
    {
      Error.passwordError=true
      setError({...Error});
    }
    else {
      Error.passwordError=false
      setError({...Error});
      setRegister(true);
    }

  }
 
  

  // useEffect(()=>{   
  //   localStorage.setItem("logdata",JSON.stringify(logdata))   
  //  },[loginData]); 

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AccountCircleIcon  sx={{ fontSize: "60px" }} />
        <Typography sx={{fontSize:{sm:"15px",md:"20px",lg:"30px"}}}>REGISTER</Typography>
        <Typography sx={{fontSize:{sm:"10px",md:"15px",lg:"20px"}}}  gutterBottom>
        Welcome To E-commarce
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
       
       <TextField
       margin="normal"
      required
       fullWidth
      id="email"
    label="Enter Name"
      name="Name"
    autoComplete="off"
      autoFocus
      
     /> 
     <Box sx={{display:{sm:"flex"},gap:"10px"}}>
          <TextField
            error={Error.emailError}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={loginData.email}
            autoComplete="off"
            autoFocus
            onChange={handleLogin}
          />
          <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              error={Error.passwordError}
              onChange={handleLogin}
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
</ Box>
         

          <Button
            type="submit"
            fullWidth
            component={ Register === true ? NavLink : Button } 
            to="/home"
            variant="contained"
            onClick={handleClick(TransitionRight)}
            sx={{ mt: 3, mb: 2 }}
          >
            Register 
          </Button>
        <Snackbar   open={snackbarShow}  TransitionComponent={transition} autoHideDuration={3000}  key={transition ? transition.name : ""} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Credentials cann't be empty
        </Alert>
      </Snackbar>
         
        </Box>
      </ThemeProvider>
    </>
  );
}

