import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Customer from '../Admin functions/AddCustomer'
// import Dashboard from './Dashboard'
import { useParams } from 'react-router-dom';
import SideBar from '../layouts/Sidebar/SidebarA';
import styled from 'styled-components';
import './Admin.css'
const Heading = styled.div`
    
    display: block;
    white-space:nowrap;
    font-size:30px;
    margin-right: 20rem;
    text-align: center;
    right:-5%;
    position:relative;
`

const Everything = styled.div`
h1{
    background:none;
}  
`

const Admin = () => {
    return (
        <div className='everything'>
        <Everything>
       <SideBar/>
       <div className='title'>
       <header id="showcase">
        <h1 class=''>Welcome</h1>
        </header>
       </div>
       </Everything>
       </div>
    )
}

export default Admin;