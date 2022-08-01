import React , {useState, useEffect } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
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

button{
  color:black;
  border:none;
}
  p{
    width:200px;
    background:none;
  }
  p 1{
    width:130px;
  }
  p 2{
    width:130px;
  }
`
const Edited = styled.div`
button{
  color:red;
  border:none;
}
.pencil{
  color:black; 
  border:none;
}
`
const ViewStock = () => {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewstock').then((response) =>
        {
            setOrdersList(response.data);
        });
    }, []);

    const deleteStock = (id) =>{
      Axios.delete(`http://localhost:3001/admin/deletestock/${id}` ).then(window.location.reload(true))
    };

   function updateStock  ()  { 
      Axios.post('http://localhost:3001/admin/updatestock')
    };

   function  deleteexpired  ()  {
     Axios.delete('http://localhost:3001/admin/deleteexpired').then( window. location. reload(true));
   }

   const both = () => {
     updateStock();
      deleteexpired();
   }

    return(
      <>
          <SideBar/>
        <div className="Users container">
          <Edit>
          <button onClick={both}  className = 'pencil'><FiIcons.FiRefreshCcw/> Refresh</button>
        <h1>Stocks</h1>
        <table className="table table-bordered table-striped" >
        
        <thead>
          <tr>
            <th><p className='1'> Order id </p></th>
            <th><p className='2'> Name  </p></th>
            <th><p className='2'> quantity  </p></th>
            <th><p className='3'> Expiry Date </p></th>   
            <th>  <p> Action </p> </th>
          </tr>
        </thead>
        <tbody>
            {ordersList.map(member =>
              <tr key={member.id}>
                <td><p>{member.stock_id}</p> </td> 
                <td><p>{member.name} </p></td> 
                <td><p>{member.quantity} </p></td>
                <td><p>{member.expiry.slice(0,10)} </p> </td>
                <td><Edited>
                    <button  onClick = {() => {deleteStock(member.stock_id)}}  > <MdIcons.MdDelete/>  </button> 
                    <Link to = {`/admin/editstock/${member.stock_id}`} ><button className = 'pencil'>   <HiIcons.HiPencil/></button></Link> </Edited></td>
                
              </tr>
            )}
        </tbody>
        </table>

        </Edit>
      </div>

      </>
    );
}

export default ViewStock;
// onClick = {() => {deleteCustomer(member.cust_id)}}