import React , {useState, useEffect } from 'react'
import Axios from 'axios' 
import './ViewCustomers.css'
import SideBar from '../layouts/Sidebar/SidebarA';
import styled from 'styled-components';

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
    display: block;
    white-space:nowrap;
    font-size:20px;
    margin-right: 20rem;
    text-align: center;
    right:-20%;
    position:relative;
`
const ViewOrders = () => {
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/vieworders').then((response) =>
        {
            setOrderList(response.data);
        });
    }, []);

    return(
        <div className="Users container">
          <SideBar/>
        <Edit>
        <h1>Orders</h1>
        <table className="table" >
        <thead>
          <tr>
            <th>Order id</th>
            <th>customer id</th>
            <th>customer name </th>
            <th>baby_products</th>
            <th>drugs</th>
            <th>Covid_needs</th>
          </tr>
        </thead>
        <tbody>
            {orderList.map(member =>
              <tr key={member.id}>
                <td>{member.orderid} </td> 
                <td>{member.cust_id}</td>
                <td>{member.cname}</td>
                <td>{member.baby_products}</td>
                <td>{member.drugs}</td>
                <td>{member.covid_needs}</td>
                <td> <button className="btn btn-danger" >Delete</button> <button className="btn btn-primary">Edit</button></td>
              </tr>
            )}
        </tbody>
        
        </table>
        </Edit>
      </div>
    );
}

export default ViewOrders;