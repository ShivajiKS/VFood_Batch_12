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
import {ErrorMessage, Form,Formik} from 'formik';
import * as Yup from 'yup';
import {NavLink,useNavigate}from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../configuration/FireBaseConfig";
import { useState } from 'react';

 function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://acoe.edu.in/">
        shivaji
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  let [error,setError]=useState("")
  let navigate=useNavigate();
  const initialValues=
    {
      email:"",
      password:"" 
    };
  const YupSchemaValidation=Yup.object().shape(
    {
      email:Yup.string().email("Invalid Email Address").required("email is required"),
      password:Yup.string().required("email is required")
    });
  const onSubmit=(values,props)=>{
    signInWithEmailAndPassword(auth,values.email,values.password)
    .then(auth=>navigate("/Dashboard"))
    .catch(error=>error?setError("Invalid user credientials"):null)
  }

  return (
    <ThemeProvider theme={theme}>
        <Formik initialValues={initialValues}  validationSchema={YupSchemaValidation} onSubmit={onSubmit}>
        { 
          (formik)=>{
            return <Form>
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
          <Typography component="h1" variant="h5">Sign in</Typography>
          <Box sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5" style={{textAlign:"center",color:"red",textTransform:"capitalize"}}>{error}</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              // autoFocus
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <ErrorMessage name="email" component={"div"}/>
         
            <TextField
              margin="normal"
              // required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}

            />
              <ErrorMessage name="password" component={"div"} />
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formik.dirty || !formik.isValid}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/SignUp" >
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Form>
    }}
      </Formik>
    </ThemeProvider>
  );
        
}