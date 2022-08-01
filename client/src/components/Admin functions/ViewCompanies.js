import React , {useState, useEffect } from 'react'
import {Modal, Button} from 'bootstrap'
import Axios from 'axios'
import {useNavigate } from 'react-router-dom';
import SideBar from '../layouts/Sidebar/SidebarA';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Edit = styled.div`
h1{
  display: block;
    white-space:nowrap;
    font-size:20px; 
    margin-right: 20rem;
    text-align: center;
    right:0%;
    position:relative;
}

p{
  background:none;
}
   
  
`
const Edited = styled.div`
button{
  color:red;
  border:none;
  background:none;
}
.pencil{
  color:black;
 }
`
const ViewCompanies = () => {
    const [companiesList, setCompaniesList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewcompanies').then((response) =>
        {
            setCompaniesList(response.data);
        });
    }, []);

    const deleteCompany = (id) =>{
      alert(`do you want to delete the company with id ${id}`);
      Axios.delete(`http://localhost:3001/admin/deletecompany/${id}` ).then(() => {alert(" The company is deleted")}).then(window.location.reload(true))
    };

    return(
      <>
          <SideBar/>
        <div className="Users container">
          <Edit>
        <h1>Companies</h1>
        <table className="table table-striped table-bordered" >
        
        <thead>
          <tr>
            <th><p className='1'> Company id </p></th>
            <th><p className='2'> Company name </p></th>
            <th><p className='3'> Company email </p></th>
            <th><p className='4'> Company address </p></th>
            <th><p className='5'> Action </p></th>
            
          </tr>
        </thead>
        <tbody>
            {companiesList.map(member =>
              <tr key={member.id}>
                <td><p>{member.comp_id}</p> </td> 
                <td><p>{member.name} </p></td> 
                <td><p>{member.email} </p></td>
                <td><p>{member.address} </p> </td>
                <td><Edited><button onClick = {() => {deleteCompany(member.comp_id)}}  > <MdIcons.MdDelete/></button> <Link to = {`/admin/editcompany/${member.comp_id}`} ><button className='pencil'> <HiIcons.HiPencil/></button></Link> </Edited></td>
                
              </tr>
            )}
        </tbody>
        </table>

        </Edit>
      </div>

      </>
    );
}

export default ViewCompanies;
// onClick = {() => {deleteCustomer(member.cust_id)}}