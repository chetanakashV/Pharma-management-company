import React , {useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import * as IoIcons from 'react-icons/io5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Edit = styled.div`
h1{
  display: block;
    white-space:nowrap;

    font-size:40px; 
    margin-right: 20rem;
    text-align: center;
    right:-20%;
    font-weight:bold;
    position:relative;
}
    
  p{
    width:100px;
  }
`

const Back = styled.div`
font-size:20px;

`


const ViewOrdersU = () => {
  const [ordersList, setOrdersList] = useState([]);
  const {username} = useParams();
    useEffect(() => {
      
        Axios.get(`http://localhost:3001/user/viewpenorders/${username}`,{username}).then((response) =>
        {
            setOrdersList(response.data);
        });
    }, []);

    

    return(
      <>
      <Back>
      <Link to = {`/user/${username}`} ><button className = 'arrow' ><IoIcons.IoChevronBackOutline/> Go Back </button></Link></Back><br></br> 
        <div className="Users container">
          <Edit> <br></br>
        <h1>Orders</h1>
        <table className="table table-striped table-bordered" >
        
        <thead>
          <tr>
            <th><p className='1'> Order id </p></th>
            <th><p className='2'> cust_name </p></th>
            <th><p className='3'> paracemol </p></th>
            <th><p className='4'> ibuprofen </p></th>
            <th><p className='5'> dolo</p></th>
            <th><p className='5'> pandol</p></th>
            <th><p className='5'> ariprazole</p></th>
            <th><p className='5'> beds</p></th>
            <th><p className='5'> oximes</p></th>        
            <th><p className='5'> total cost</p></th>        
            
          </tr>
        </thead>
        <tbody>
            {ordersList.map(member =>
              <tr key={member.id}>
                <td><p>{member.orderid}</p> </td> 
                <td><p>{member.cus_name}</p> </td> 
                <td><p>{member.no_paracetmol}</p> </td> 
                <td><p>{member.no_ibu}</p> </td> 
                <td><p>{member.no_dolo}</p> </td> 
                <td><p>{member.no_pan}</p> </td> 
                <td><p>{member.no_arip}</p> </td> 
                <td><p>{member.no_beds}</p> </td> 
                <td><p>{member.no_oxime}</p> </td> 
                <td><p>{member.total_total}</p> </td> 
               
              </tr>
            )}
        </tbody>
        </table>

        </Edit>
      </div>

      </>
    );
}

export default ViewOrdersU;
// onClick = {() => {deleteCustomer(member.cust_id)}}