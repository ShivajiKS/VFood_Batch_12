import React from 'react'

export const Home= () => {

  const styles={
      headingStyles:{
      marginTop:"100px", 
      textAlign:'center'  
    },
    paraGraph:{
      textAlign:'justify',
      marginTop:"25px",
      textIndent:"60px",
    }
  }
  return (
    <>
        <h2 style={styles.headingStyles}>SMART RESTAURANT MANAGEMENT SYSTEM</h2>
        <p style={styles.paraGraph}>In this project we introduce an efficient and user friendly Smart Restaurant Management System. This system will solve key problems faced by restaurants today. Restaurants have many  inefficiencies due to human limitations that can be resolved through automation and device-to-device communication. This Smart Restaurant Management System accomplishes this by providing two interfaces for the two types of users in restaurants; an web and mobile application for customers and a web application for restaurant staff members. The web application allows customers to have a seamless dining experience with features such as finding available parking spaces easier through internet connected web and mobile application, finding available tables at the restaurant easier through application, ordering dishes through an interactive menu.</p>
    <p style={styles.paraGraph}>Now a days, technological innovations have empowered every business, and the restaurant industry is not an exception. From booking parking slots, ordering food and billing payments, new technological tools make their space and help restaurants connect with customers, fulfill their demands, and control overhead costs. Through this we can reduce the waiting time of the customer and can help in managing the staff. This even helps the manager to estimate the food demand according to the requests.
</p>
<div style={{position:"absolute",right:"20vw"}}>
    <h2 >Under The Guidance Of </h2>
    <h4 style={{marginLeft:"7vw"}} >V. Veera Prasad, M.Tech,</h4>
    <h4 style={{marginLeft:"7vw"}}>Assistant Professor , Dept of CSE</h4>
    </div>
    </>
  );
}
export default Home;

