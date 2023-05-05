
import { useState } from "react";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from 'react';
import { NavLink } from "react-router-dom";
import { theme } from "../../../utils/theme/Index";
import Snackbar from "@mui/material/Snackbar";
import { isValidEmail,TransitionRight } from "../../../utils/helper";
import {
  Box,
  TextField,
  ThemeProvider,
  Typography,

} from "@mui/material";
import { api } from "../../../Api/Index";
import SnackBar from "../../../components/Snackbar/Index";


export default function Login(props) {
  const [Register,setRegister]=useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [Error, setError] = React.useState({
      emailError:false,
      passwordError:false,
  });
  const [registerData, SetregisterData] = useState({
    email: "",
    firstName:""
  });
  const [snackbarShow, setsnackbarShow] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [SnackBarMsg,setSnackBarMsg]= React.useState("");

  const handleClick = (Transition) => {
    setTransition(() => Transition);
      setsnackbarShow(true);
   
  };

  const handleClose = () => {
    setsnackbarShow(false);
  };


  const handleLogin = (e) => {
    const { name, value } = e.target;
    SetregisterData({ ...registerData, [name]: value });
    if (!isValidEmail(registerData.email)) {
      Error.emailError=true
      setError({...Error});
    }
    else if (registerData.email === "") {
      Error.emailError=true
      setError({...Error});   
    }
    else{
      Error.emailError=false
      setError({...Error});
    }
  }
 
const handleData =async()=>{
  if(registerData.email || registerData.firstName == "" )
  {
    setsnackbarShow(true)
    setSnackBarMsg("All filds are required")  
  }
   else if(registerData.email == "")
    {
      setsnackbarShow(true)
      setSnackBarMsg("Email Can't be empty")  
    }
   
    else{
      setsnackbarShow(false)
    }
    const {data}= await api.auth.register(registerData);
    if(data === " user already exits")
    {
      setRegister(false);
      setsnackbarShow(true);
      setSnackBarMsg("Email Alredy Exits")

    }
    else{
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
      id="firstName"
    label="Enter Name"
    value={registerData.firstName}
      name="firstName"
    autoComplete="off"
    onChange={handleLogin}
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
            value={registerData.email}
            autoComplete="off"
            autoFocus
            onChange={handleLogin}
          />
          {/* <FormControl sx={{ mt: 2 }} variant="outlined" fullWidth>
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
          </FormControl> */}
      
</ Box>
         

          <Button
            type="submit"
            fullWidth
            component={ Register === true ? NavLink : Button } 
            to="/"
            variant="contained"
            onClick={() =>{ handleClick(TransitionRight); handleData(); }}
            sx={{ mt: 3, mb: 2 }}
          >
            Register 
          </Button>
          <SnackBar open={snackbarShow} transition={transition} handleClose={handleClose} type="error" msg={SnackBarMsg} />
        
       
         
        </Box>
      </ThemeProvider>
    </>
  );
}

