import React , {useState, useEffect } from 'react'
import Axios from 'axios' 
import './ViewCustomers.css'
import * as MdIcons from 'react-icons/md';
import SideBar from '../layouts/Sidebar/SidebarA';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


const Edit = styled.div`
h1{
  display: block;
  
    white-space:nowrap;
    font-size:30px;
    margin-right: 20rem;
    text-align: center;
    right:-12%;
    position:relative;
}
button{
  color:red;
  border:none;
  background:none;
}

`

const Edited = styled.div`
.btn-danger{
  color:red;
}

`

const ViewCustomers = () => {
    const [customerList, setCustomerList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewcustomers').then((response) =>
        {
            setCustomerList(response.data);
        });
    }, []);

    const deleteCustomer = (id) =>{
      alert(`do you want to delete the customer with id ${id}`);
        Axios.delete(`http://localhost:3001/admin/deletecustomer/${id}` ).then(() => {alert("The customer is deleted")}).then(window.location.reload(false))
    };

    return(
      <>
          <SideBar/>
        <div className="Users container">
        <Edit>
        <h1><b><i>Customers</i></b></h1>
        <table className="table table-bordered table-striped  " >
        <thead>
          <tr>
            <th>Customer id</th>
            <th>Customer name</th>
            <th>Customer email </th>
            <th>Customer address</th>
            <th>Customer phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {customerList.map(member =>
              <tr key={member.id}>
                <td>{member.cid} </td> 
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.address}</td>
                <td>{member.phone}</td>
                <td> <Edited><button  className="btn btn-danger" onClick = { () => {deleteCustomer(member.cid)}}> <MdIcons.MdDelete/></button></Edited></td>
              </tr>
            )}
        </tbody>
        
        </table>
        </Edit>
      </div>
      </>
    );
}

export default ViewCustomers;