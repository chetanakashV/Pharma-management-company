import React, {  useState } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';
import styled from 'styled-components'
import isEmpty from 'is-empty'
import './AddStocks.css'

const Company = () => {
  Axios.defaults.withCredentials = true;

    
    const [nameReg, setNameReg] = useState ("");
    const [addressReg, setAddressReg] = useState("");
    const [emailReg, setEmailReg] = useState ("");
    const Heading = styled.div `
      position:absolute;
      right:50%;
    `

    const register = () => {
      if( nameReg === '' || emailReg === '' || addressReg === ''){alert('please enter valid values'); return;}
        Axios.post("http://localhost:3001/admin/addcompany", {
          name: nameReg,
          address: addressReg,
          email: emailReg,
        }).then((response) => {
          console.log(response);
        }).then(window.location.reload(false));
      };
  

      return (
      <>
          <SideBar/>
        <div class="login-form">
        
	     	<h1>Add a company</h1> 
	      
        
        
        <div class="content">
        <div class="input-field">
        <input type="text" required
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        placeholder="Name" />
      </div> 
        <br/>
        
        
        <div class="input-field">
        <input type="text" required
          onChange={(e) => {
            setAddressReg(e.target.value);
          }}
        placeholder="Address" />
      </div>
        <br/>
        <div class="input-field">
        <input type="email" 
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        placeholder="Email" required />
      </div>
        <br/>
        </div>
        <div class="action">
        <button className = 'button' onClick={register}> Add company </button>
        </div>
      </div>
     </>
      );
}

export default Company;