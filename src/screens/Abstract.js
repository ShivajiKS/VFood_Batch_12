import React from 'react'

export const Abstract = () => {
  const styles={
      headingStyles:{
      marginTop:"100px", 
      textAlign:'center'  
    },
    paraGraph:{
      textAlign:'justify',
      marginTop:"25px",
      textIndent:"60px",
    },
      container:{
            marginTop:"3vh",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"spaceEqually",
           alignItems:"spaceEqually",
      },
      imgStyles:{
          height:"38vh",
          width:"35vw",
          marginLeft:"30px",
      },
  }
  return (
    <>
        <h2 style={styles.headingStyles}> ABSTRACT</h2>
        <p style={styles.paraGraph}>In this project we introduce an efficient and user friendly Smart Restaurant Management System. This system will solve key problems faced by restaurants today. Restaurants have many  inefficiencies due to human limitations that can be resolved through automation and device-to-device communication. This Smart Restaurant Management System accomplishes this by providing two interfaces for the two types of users in restaurants; an web and mobile application for customers and a web application for restaurant staff members. The web application allows customers to have a seamless dining experience with features such as finding available parking spaces easier through internet connected web and mobile application, finding available tables at the restaurant easier through application, ordering dishes through an interactive menu.</p>
    <p style={styles.paraGraph}>Now a days, technological innovations have empowered every business, and the restaurant industry is not an exception. From booking parking slots, ordering food and billing payments, new technological tools make their space and help restaurants connect with customers, fulfill their demands, and control overhead costs. Through this we can reduce the waiting time of the customer and can help in managing the staff. This even helps the manager to estimate the food demand according to the requests.
</p>
<div style={styles.container}>
    <img  style={styles.imgStyles} src={"https://img.freepik.com/premium-vector/woman-home-chair-ordering-food-from-her-smartphone-vector-illustration_357257-828.jpg?w=826"} />
    <img style={styles.imgStyles}  src={"https://img.freepik.com/free-photo/high-angle-delicious-sushi-assortment_23-2149870761.jpg?w=1060&t=st=1672469642~exp=1672470242~hmac=a1b83f7815775b720f93ca06a85a016e41abc2d03e2425a6eb91a3a74b648d4d"} /> 
</div>
 </>
  );
}
export default Abstract;

