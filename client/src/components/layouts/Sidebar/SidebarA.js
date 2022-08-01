import React, {useState} from 'react'
import { Link,NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';
import {SideBarData} from './SidebarDataA'
import SubMenu from './Submenu';

const Nav = styled.div`
.Title{
    background:black;
    display: block;
    white-space:nowrap;
    font-size:30px;
    margin-right: 20rem;
    text-align: center;
    right:-10%;
    position:relative;
}
*{
    background:black;
}
background: black;
width:100%;
color:white;
height: 100px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled (Link)` 
*{
    background:black;
}
.bar{
    background: black;
    color:white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.logout{
    background:black;
    display: block;
    color:white;
    text-decoration:none;
    white-space:nowrap;
    font-size:30px;
    margin-right: 20rem;
    text-align: center;
    right:-60%;
    position:relative;
}
.icon{
    display : block;
    position: relative;
    right: -55%;

}
color:white;
width:120%;
background:black;
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`
const SidebarNav = styled.nav`
background: black;
width:250px;
height:300%;
right:-10%;
display: flex;
justify-content: center;
position: fixed;
top: 10px;
left: ${({ sidebar }) => (sidebar ? '-0' : '-100%')};
transition: 350ms;
z-index: 10;

`
const SidebarWrap = styled.div` 

width: 100%;
height:100%
` 

function SideBar() {
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    
    

    return (
        <>
        <Nav>
            <NavIcon to='#' >
             <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            <div className='Title'>
            <p>DBMS PHARMACY COMPANY</p>
         </div>
            <NavIcon to='#' >
                <div className='icon'>
                 <IoIcons.IoLogOutSharp/>
                </div>
            
                <NavLink exact to = '/'><div className='logout'>Logout</div></NavLink>
            </NavIcon>
         
        </Nav>
        <SidebarNav sidebar = {sidebar}>
         <SidebarWrap>
          <NavIcon to='#'>
             <AiIcons.AiOutlineClose onClick={showSidebar} className='bar'/>
          </NavIcon>
          {SideBarData.map((item,index) => {
                return <SubMenu item = {item} key = {index} />;
            })}
         </SidebarWrap>
        </SidebarNav>

        </>
    );
}

export default SideBar;