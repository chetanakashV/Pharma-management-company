import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import './Landing.css'
const Button = styled.div`
button{
color:green;
}
` 


const Landing = () =>{
    return (
        <header id = "showcase">
         <p>Welcome to DBMS PHARMA COMPANY </p> 

         <p> Where you can order the medicines online at a very reasonable prices   </p>           
         <p> Choose Your Role  </p>           
         
            <Button>
          <NavLink exact to = '/login' > <button className="button btn1" > Admin </button> </NavLink>  
          <NavLink exact to = '/loginu'> <button className="button btn2" > Customer </button> </NavLink>
            </Button>
            </header>
    );
} 

export default Landing;