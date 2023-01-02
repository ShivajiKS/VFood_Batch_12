import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import {auth} from "../configuration/FireBaseConfig";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


 const Dashboard = () => {
  const navigate=useNavigate();
  const [user,loading,error]=useAuthState(auth);
  const signOut= async ()=>{
            await signOut(auth);
            navigate("/LogIn");
   }
  return (
    <Container >
    
        <h1 style={{marginTop:"100px", textAlign:"center",color:"red"}}>Account Dashboard</h1>
        <Box
          sx={{width: "40vw", minHeight: "40vh", }}>
          <Paper elevation={3} >
            <h2 style={{textAlign:"center",paddingLeft:10, padding:"20px"}}>PROFILE </h2>
            <h3 style={{marginLeft:"3vw"}}>Email : {user?.email} </h3>
            
              <Stack direction="row" spacing={4} style={{marginLeft:"10vw",}} >
                  <Button variant="contained"style={{ marginBottom:"30px", width:"10vw"}}>Edit</Button>
                  <Button onclick={signOut} variant="outlined" color='secondary' style={{ marginBottom:"30px", width:"10vw"}}>Logout  </Button>
              </Stack>
          </Paper>
        </Box>
    </Container>
  )
}
export default Dashboard;


    
