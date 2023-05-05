import { useState } from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { theme } from "../../../utils/theme/Index";
import Snackbar from "@mui/material/Snackbar";
import { isValidEmail, isValidPassword,TransitionRight } from "../../../utils/helper";
import {
  Box,
  FormControl,
  FormHelperText,
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
import { api } from "../../../Api/Index";
import SnackBar from "../../../components/Snackbar/Index";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function Login() {
  const navigate = useNavigate();
  const [log, setlog] = useState(false); 
  const [SnackBarMsg,setSnackBarMsg]= React.useState("");
   const [showPassword, setShowPassword] = React.useState(true);
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
      setError({...Error})
    }
  }

  React.useEffect(()=>{
      console.log(log)
  },[log])

  const handleData =async()=>{
    const {data}= await api.auth.login(loginData);
    if(data === "Email Does not exist")
    {
      setsnackbarShow(true)
      setSnackBarMsg("Email Does not exist")
    }
    if(data.Password === "password was incorect")
    {
      setsnackbarShow(true)
      setSnackBarMsg("Password was Invalid")
    }
    if(data.msg === "login successful")
    {
      localStorage.setItem("Token",data.token);
      setlog(true);  
      navigate("/home")
      
    }
 
}
 
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AccountCircleIcon  sx={{ fontSize: "60px" }} />
        <Typography sx={{fontSize:{sm:"15px",md:"20px",lg:"30px"}}}>LET'S GET STARTED NOW!</Typography>
        <Typography sx={{fontSize:{sm:"10px",md:"15px"},display:{xs:"none",sm:"block"}}}  gutterBottom>
          or create an account if not registred yet
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            error={Error.emailError}
            margin="normal"
            required
            fullWidth
            id="email"
            helperText={Error.emailError === true ? "Email contain @" : ""}
            label="Email Address"
            name="email"
            value={loginData.email}
            autoComplete="off"
            autoFocus
            onChange={handleLogin}
          />
          <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth >
            <InputLabel  htmlFor="outlined-adornment-password" >
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              error={Error.passwordError}
              onChange={handleLogin}
               helperText={Error.passwordError === true ? "password shold be 8 charachter long" : ""}
              id="outlined-adornment-password"
              type={showPassword ? "password" : "text"}
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
          { 
            Error.passwordError === true ? <FormHelperText sx={{color:"#D10000"}}>Password shold be 8 character Long</FormHelperText> : ""
          }

          <Box sx={{ textAlign: "end", mt: 2 }}>
            <NavLink to="/Forgot" variant="body2">
              Forgot password?
            </NavLink>
          </Box>

          <Button 
            fullWidth
            variant="contained"
            onClick={()=>{handleClick(TransitionRight); handleData()}}
            sx={{ mt: 3, mb: 2 }}
          >
            lOG IN  
          </Button>
          <SnackBar open={snackbarShow} transition={transition} handleClose={handleClose} type="error" msg={SnackBarMsg} />

          <Box
            sx={{
              display:{sm:"flex"},
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
