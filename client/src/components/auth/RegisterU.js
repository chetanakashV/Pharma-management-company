import React, {  useState } from "react";
import Axios from 'axios';
import NavBar from "../layouts/NavbarU"
import './RegisterU.css'

const RegisterU = () =>{


    const [nameReg, setNameReg] = useState ("");
    const [usernameReg, setUsernameReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");
    const [addressReg, setAddressReg] = useState ("");
    const [phoneReg, setPhoneReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");
  

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/registeru", {
          name: nameReg,
          username: usernameReg,
          email: emailReg,
          phone: phoneReg,
          address: addressReg,
          password: passwordReg,
        }).then((err,res) => {
          if(err){alert("the user is already registered"); }
        });
      };
     
       return (
         <>
          <NavBar/>
        <div class="login-form">
       <div className="registration">
        <div class="header">
        <div class="content">
	     	<h2>Create Account</h2>
	      </div>
        <form id="form" class="form">
        <div class="form-control">
       
        <div class="input-field" >
        <input 
          type="text" required placeholder="NAME..."
          onChange={(e) => {
            setNameReg(e.target.value);
          }}  
        /></div><div/><br/>
        </div>
        <div class="form-control">
      
          <div class="input-field" >
        <input 
          type="text"  required placeholder = "USERNAME..."
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          /></div><br/>
          </div>
        <div class="form-control">
    
        <div class="input-field" >
        <input 
          type="email" required placeholder = "EMAIL..."
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          /></div><br/>
          </div>
          <div class="form-control">
      
        <div class="input-field" >
        <input 
          type="text"  required placeholder = "PHONE..."
          onChange={(e) => {
            setPhoneReg(e.target.value);
          }}
          /></div><br/>
          </div>
          <div class="form-control">
      
        <div class="input-field" >
        <input 
          type="text"  required placeholder = "ADDRESS..."
          onChange={(e) => {
            setAddressReg(e.target.value);
          }}
          /></div><br/>
          </div>
        <div class="form-control">
       
        <div class="input-field" >
        <input 
          type="password" required placeholder="PASSWORD..."
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

export default RegisterU;