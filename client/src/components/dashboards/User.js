import React,{useState,useEffect} from 'react';
import Axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Customer from '../Admin functions/AddCustomer'
// import Dashboard from './Dashboard'
import { NavLink,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SideBar from '../layouts/Sidebar/SidebarU';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';
import './User.css'
// const Heading = styled.div`
// background:black;
// display: block;
// white-space:nowrap;
// font-size:30px;
// margin-right: 20rem; 
// text-align: center;
// right:-5%;
// position:relative;
// `
const Everything = styled.div`
 .logout{
     border:none;   
     position:absolute;
     right:2%;
     background:none;
 }
 `
 
 const User = () => {
    const {username} = useParams();
    const [userDetails,setUserDetails] = useState({});
    
    useEffect(() => {
        Axios.get(`user/viewdetails/${username}`).then((response) => {
            setUserDetails(response);
        })
    }) 

    return (
        <div className='everything'>
        <Everything>
              <NavLink exact to = '/'><button className='logout'><RiIcons.RiLogoutBoxFill/>Logout</button></NavLink>
       <header id = "showcase">
         <p>Welcome {username} </p> 

         <p>  You can order the medicines online at a very reasonable prices   </p>           
         <p> Happy Shopping  </p>  
       <p></p>
      <Link to = {`/user/buyitems/${username}`}><button className="button btn1"> Buy Items</button></Link>
      <Link to = {`/user/viewsuccorders/${username}`}><button className="button btn2"> Order History</button></Link>
      <Link to = {`/user/viewpenorders/${username}`}><button className="button btn3"> Pending Orders</button></Link>
      </header>
       </Everything>
       </div>

       
    )
}

export default User;