import React, {  useState } from "react";
import Axios from 'axios';
import NavBar from "../layouts/Navbar"
import './Login.css'


const Register = () =>{
 

    const [nameReg, setNameReg] = useState ("");
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");
  

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {
          name: nameReg,
          username: usernameReg,
          email: emailReg,
          password: passwordReg,
        }).then((err,res) => {
          if(err){alert("the user is already registered");}
          if(!err){alert("registration succesful");}
        });
      };
     
       return (
         <>
          <NavBar/>
        <div class="login-form">
       <div className="registration">
        <div className="header">
         <div class="content">
	     	<h2>Create Account</h2>
	      </div>
        <form id="form" className="form">
        <div class="form-control">
     
        <div class="input-field" >
        <input 
          type="text" required  placeholder="Name"
          onChange={(e) => {
            setNameReg(e.target.value);
          }}  
        /></div><br/>
        </div>
        <div class="form-control">
     
        <div class="input-field">
        <input 
          type="text"  required placeholder="Username"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          /></div><br/>
          </div>
        <div class="form-control">
     
        <div class="input-field">
        <input 
          type="email" required  placeholder="Email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          /></div><br/>
          </div>
        <div class="form-control">
        
        <div class="input-field">
        <input 
          type="password" required placeholder="Password"
          onChange={(e) =>{
            setPasswordReg(e.target.value);
          }} 
          /></div> <br />
          </div>
          <div class="action">
        <button className = "btn" onClick={register}> Register</button>
        </div>
        </form>
      </div>
      </div>
      </div>
      </>
  
      );
}

export default Register;