<div>
{navItems.map((item) => (
  <ListItem key={item} >
    <ListItemButton sx={{ textAlign: 'center', display:"block", width:"100px"}}>
      <ListItemText> 
        <Button component={NavLink} to={`/${item}`} style={navLinkStyles}></Button>
        </ListItemText> 
    </ListItemButton>
  </ListItem>
))}
</div>







{
    ({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit})=>{
    
    }
}


<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={async (values, { resetForm }) => {
  await onSubmit(values);
  resetForm();
}}
>

<ErrorMessage name="name" render={renderError} />




        <Routes>
          <Route path="/" element={<DrawerAppBar/> } />
          {/* <Route path="/SinUp" element={<SignInScreen/> } /> */}
        </Routes>
   



    <Formik initialValues={{
      email:"",
      password:"" }}
      validationSChema={YupSchemaValidation}
      onSubmit={(values,formikHelpers)=>formikHelpers.resetForm()} >
    <Form>
     {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit})=>
          {

          }
        }
    </Form>
  </Formik>




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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>




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

export default function SignIn() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const initialValues=
    {
      email:"",
      password:"" 
    };
  const YupSchemaValidation=Yup.object(
    {
      email:Yup.string().email("Invalid Email Address").required("email is required"),
      passowrd:Yup.string().required("email is required")
    });

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
            Sign in
          </Typography>
          <Formik initialValues={initialValues}  validationSChema={YupSchemaValidation}>
          <Form>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
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
            {(formik)=>{
              console.log(formik)
            }}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            </Form>
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        {/* </Box> */}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
        
}




team members ---
import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const images =[

	{
    id:"1",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/20mh5a0502.jpg",
    name:"Kondeti shivaji",
    phoneNumber:"6304464476",
    address:"P.Gannavaram"
	},
	{
    id:"1",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/20mh5a0502.jpg",
    name:"",
    phoneNumber:"",
    address:""
	},
  {
    id:"1",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/20mh5a0502.jpg",
    name:"",
    phoneNumber:"",
    address:""
	},
  {
    id:"1",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/20mh5a0502.jpg",
    name:"",
    phoneNumber:"",
    address:""
	},
];


 const  TeamMemberDetails=()=> 
 {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{position:"relative", top:"70px"}}>
      {images.map((item) => {
        const {id,imgUrl,phoneNumber,name,}=item;
        <div key={id}>
        return (
          <>
          <Button onClick={handleOpen}>Open modal</Button>
          {/* <img src={imgUrl} width="200px" height="250px" onMouseOver={handleOpen} /> */}
        <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description" >
                  <Box sx={style}>
          <Typography id="modal {navItems.map((item) => (-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {phoneNumber}
          </Typography>
        </Box>
      </Modal>
          </>
        );
        </div>
      })
     
      }
      </div>
  );

    }

export default TeamMemberDetails;




sinUpform -------


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
import {NavLink, useNavigate} from 'react-router-dom';
import SinUpYupSchemaValidation from '../validation/SinUpValidationSchema';
import { useState,useContext } from 'react';
import { auth } from "../configuration/FireBaseConfig";
import { createUserWithEmailAndPassword} from "firebase/auth";
// import { useUserAuth } from '../context/UserAuthContext';

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
  const [error, setError]=useState("");
  const navigate =useNavigate();
  // const signUp=useContext(useUserAuth);
  const initialValues=
  {
    firstName :"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
    
  };

    const onSubmit= async (values, props)=>{
      console.log(values)
      // setError("");
      // createUserWithEmailAndPassword(auth,values.email,values.password)
      // .then(auth=>navigate("/dashboard"))
      // .catch(error=>setError(error.message))
      //  props.resetForm();

    }






  return (
    <ThemeProvider theme={theme}>
      <Formik initialValues={initialValues}  validationSchema={SinUpYupSchemaValidation} 
      onSubmit={onSubmit}>
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.firstName}
                  // error={formik.errors.firstName}

                />
              </Grid>
              {formik.errors.firstName && formik.touched.firstName ? (
              <div>{formik.errors.firstName}</div> ) : null}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              <ErrorMessage name="lastName" component={"div"}/>
         
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}                 
                />
                 <ErrorMessage name="email" component={"div"}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                 <ErrorMessage name="password" component={"div"}/>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="ConfirmPassword"
                  autoComplete="new-password"
                  onChange={formik.handleChange}
                  value={formik.values.ConfirmPassword}
                />
             <ErrorMessage name="ConfirmPassword" component={"div"} />
              </Grid>              
              {/* <Grid item xs={12}>
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // disabled={!formik.dirty || !formik.isValid}
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
      </Form>
      }}
      </Formik>
    </ThemeProvider>
  );
}
