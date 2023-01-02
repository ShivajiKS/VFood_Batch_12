import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const data =[
	{
    id:"1",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/19mh1a0525.jpg",
    name:"K.Suseela Rani ",
    pinNumber:"19MH1A0525",
    phoneNumber:"65375288091",
	},
	{
    id:"2",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/19mh1a0501.jpg",
    name:"A.Gangadhar    ",
    pinNumber:"19MH1A0501",
    phoneNumber:"87645624624",
  
	},
  {
    id:"3",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/20mh5a0507.jpg",
    name:"N.Sivasai",
    pinNumber:"20MH5A0507",
    phoneNumber:"9848713508",
	},
  {
    id:"4",
		imgUrl:"http://info.aec.edu.in/ACOE/StudentPhotos/20mh5a0502.jpg",
    name:"Kondeti Shivaji",
    pinNumber:"20MH5A0502",
    phoneNumber:"6304464476",
	},
];
const styles={
  container:{
        marginTop:"15vh",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:"100px",
        justifyContent:"spaceEqually",
       alignItems:"spaceEqually",
  },
  subContainer:{
     padding:"3vw",
     border: "2px solid purple",
     marginRight:"15px",
  },
  imgUrl:{
      width:"170px",
      height:"200px"
  },
  description:{
    // border: "2px solid purple",
    marginLeft:0,
    padding:0
  },
}


const  TeamMemberDetails=()=>  {

  return (
     <div style={styles.container}>
     {
      data.map(item=>{
            const {id,imgUrl,name,phoneNumber,pinNumber}=item;
            return (
            <div key={id} style={styles.subContainer} >
              <img src={imgUrl} alt="image not Found" style={styles.imgUrl} />
              <div style={styles.description}>
               <h3>{name}</h3> 
               <h3>{pinNumber}</h3>
               <h3>{phoneNumber}</h3>
              </div> 
            </div>
            );
      })
     }

     </div>
  )
}

export default TeamMemberDetails;