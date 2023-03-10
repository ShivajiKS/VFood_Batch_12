import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {NavLink, useNavigate} from 'react-router-dom';
import SinUpYupSchemaValidation from '../validation/SinUpValidationSchema';
import { auth } from "../configuration/FireBaseConfig";
import { createUserWithEmailAndPassword} from "firebase/auth";
// import { useUserAuth } from '../context/UserAuthContext';
import {useState} from "react";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="acoe.edu.in">
        shivaji
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SinUpScreen() {
  const [error, setError]=useState("");  // authentication errors handling ... 
  const navigate =useNavigate();
  let [userData, setUserData]=useState({
    email:"",
    password:"",
    confirmPassword:""   
  });
  let [EmailError, setEmailError]=useState();
  let [passwordError, setpasswordError]=useState();
  let [confirmPasswordError, setconfirmPasswordError]=useState();

  const userDataHandler=(event)=>{
    setUserData((prevState)=>{
      return{
        ...prevState,
        [event.target.name] : event.target.value,
      }
    })
  }   //userDataHandler function close

   // ================== email validation start ==================
    const emailValidate=()=>{     
        const {email} =userData;           
        if(email==""){
          setEmailError("Email is Required..");
          return false;
        }       
        if(!email.match(/[a-zA-Z0-9/-/.]*[@][ga][a-z]{3,4}[/.][comin]{2,3}$/)){
          setEmailError("please enter a valid email..");
          return false;
        }
        setEmailError(""); 
    }  
    // ================== email validation end ==================
    
    // ================== password validation start ==================
    const passwordValidate=()=>{
      const {password} =userData; 
      if(password==""){                  
          setpasswordError("Password Required...");
          return false;
      }
      else if (password.search(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/) < 0) 
      {
          setpasswordError("Password should contain atleast 1 uppercase, special symbol,digit and should be minimum 8 chars");
          return false;
      } 
      setpasswordError("");                                       
    } 
     // ================== password validation end ==================


    // ================== confirm password validation start ==================
    const confirmPasswordValidate=()=>{
      const {password,confirmPassword} =userData; 
        if(password!=confirmPassword){
            setconfirmPasswordError("Confirm Password Did Not Matched...");
            return false;
        }
        setconfirmPasswordError("");
    }
    // ================== confirm password validation end ==================
    const onSubmit= async (event)=>{
      setError("");
      createUserWithEmailAndPassword(auth, userData.email,userData.password)
      .then(auth=>{
         navigate("/LogIn");
         alert("Registered Succesfully..")
       })
      .catch(error=>setError(error.message))

    }






  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  // autoComplete="email"
                  onChange={userDataHandler}
                  value={userData.email}
                  onKeyUp={emailValidate}                
                />
                <Typography component="h1" variant="h6" style={{color:"red",fontSize:"13px"}}> {EmailError}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="new-password"
                  onChange={userDataHandler}
                  value={userData.password}
                  onKeyUp={passwordValidate}  
                />
                <Typography component="h1" variant="h6" style={{color:"red",fontSize:"13px"}}>{passwordError} </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="ConfirmPassword"
                  // autoComplete="new-password"
                  onChange={userDataHandler}
                  value={userData.ConfirmPassword}
                  onKeyUp={confirmPasswordValidate}  
                />
                <Typography component="h1" variant="h6" style={{color:"red",fontSize:"13px"}}>{confirmPasswordError} </Typography>
              </Grid>              
              {/* <Grid item xs={12}>
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/LogIn" >
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}