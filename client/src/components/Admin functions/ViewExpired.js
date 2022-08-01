import React , {useState, useEffect } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import styled from 'styled-components';
import { Link } from 'react-router-dom'




const ViewExpired = () => {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewexpired').then((response) =>
        {
            setOrdersList(response.data);
        });
    }, []);

   const Edit = styled.div`
   p{
     background:none;
   }
   `

    return(
      <>
          <SideBar/>
        <div className="Users container">
      
        <h1> Expired Stocks</h1>
        <Edit>
        <table className="table table-bordered table-striped" >
        <thead>
          <tr>
            <th><p > Stock id </p></th>
            <th><p > Name  </p></th>
            <th><p > Quantity  </p></th>
            <th><p> Expiry Date </p></th>   
 
          </tr>
        </thead>
        <tbody>
            {ordersList.map(member =>
              <tr key={member.id}>
                <td><p>{member.stock_id}</p> </td> 
                <td><p>{member.name} </p></td> 
                <td><p>{member.quantity} </p></td>
                <td><p>{member.expiry.slice(0,10)} </p> </td>
              </tr>
            )}
        </tbody>
        </table>
        </Edit>

 
      </div>

      </>
    );
}

export default ViewExpired;
// onClick = {() => {deleteCustomer(member.cust_id)}}