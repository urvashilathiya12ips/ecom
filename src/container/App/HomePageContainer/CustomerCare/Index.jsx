import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceIcon from '@mui/icons-material/Place';
import {CustomerCarePage} from "../../../../assets/Image"
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

 function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
      const theme = createTheme();

export default function Customer() {
 
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box sx={{ display:{md:"flex",lg:"flex",xl:"flex"},justifyContent:"space-around", alignItems:"center",gap:"10px",}}>
            <Box sx={{width:{md:"150%"}}}>
                <Box component="img" src={CustomerCarePage} sx={{width:"100%",height:{md:"500px",lg:"600px",xl:"650px"}}}></Box>
            </Box>
            <Box>
                <Typography sx={{fontSize:{xs:"20px",sm:"30px",md:"40px"},padding:"4px"}}>24/7 Customer Service</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet tempora mollitia, quos amet impedit autem debitis enim deleniti reprehenderit unde? </Typography>
            <Box sx={{display:{xs:"",sm:"flex"},justifyContent:"center"}}>
                <Box>
                <Box  sx={{padding:"14px" ,display:"flex",alignItems:"center",gap:"4px"}}>
                    <Avatar>
                    <MailRoundedIcon />
                    </Avatar>
                    <Typography sx={{fontSize   :{xs:"15px",sm:"17px"}}} >abc123@gmail.com</Typography>
                </Box> 
                <Box  sx={{padding:"14px" ,display:"flex",alignItems:"center",gap:"4px"}}>
                    <Avatar>
                    <LocalPhoneRoundedIcon />
                    </Avatar>
                    <Typography sx={{fontSize:{xs:"15px",sm:"17px"}}} >+91 1234567891</Typography>
                </Box> 
                </Box>
                <Box>
                <Box  sx={{padding:"14px" ,display:"flex",alignItems:"center",gap:"4px"}}>
                    <Avatar>
                    <PlaceIcon />
                    </Avatar>
                    <Typography sx={{fontSize:{xs:"15px",sm:"17px"}}} >Ahemdabad</Typography>
                </Box> 
                <Box  sx={{padding:"14px" ,display:"flex",alignItems:"center",gap:"4px"}}>
                    <Avatar>
                    <LinkedInIcon />
                    </Avatar>
                    <Typography sx={{fontSize:{xs:"15px",sm:"17px"}}} >Linkedin</Typography>
                </Box> 
                </Box>
            </Box>
            </Box>
        </Box>
          
          

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

    </>
  )
}
