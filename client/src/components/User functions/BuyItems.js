import React,{useState} from 'react';
import Axios from 'axios';
import { Navigate, useParams } from 'react-router';
import {Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io5';
import './BuyItems.css'
import styled from 'styled-components';

const BuyItems = () => {
  const  {username} = useParams();
  const [no1, setno1] = useState(0); 
  const [no2, setno2] = useState(0);
  const [no3, setno3] = useState(0);
  const [no4, setno4] = useState(0);
  const [no5, setno5] = useState(0);
  const [no6, setno6] = useState(0);
  const [no7, setno7] = useState(0);
  const [price, SetPrice] = useState(0);



  function calcprice ()  {
    SetPrice(no1*8 + no2*10 + no3*15 + no4*12 + no5*14 + no6*1500 + no7*800)
  }

  
 const buyitems = () => {
  if(no1 ==0 &&no2 ==0 &&no3 ==0 &&no4 ==0 &&no5 ==0 &&no6 ==0 &&no7 ==0 ){alert('you have to select atlease one item'); return;}

   Axios.post("http://localhost:3001/user/buy", {
     username,
     no_paracetmol:no1,
     no_ibu:no2,
     no_dolo:no3,
     no_pan:no4,
     no_arip:no5,
     no_beds:no6,
     no_oxime:no7,
     total_total:price
   }).then((response) => {
    console.log(response);
  }).then(window.location.reload(false));
 };


 const PRICE = styled.div`
 position:absolute;
 right:40%;
 top:880px;
 white-space:nowrap;
 `
 const BUTTON = styled.div`
 a{
 text-decoration:none;
  
 }
 `



  return(
    <>
     <Link to = {`/user/${username}`} ><button className = 'arrow' ><IoIcons.IoChevronBackOutline/> Go Back </button></Link>
      <div className="back">
       <div className="login-form">
       <form>
	     	<h1>Buy Items</h1>
         <div class="content">
        <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno1(e.target.value);
            calcprice();
          }}  
          placeholder="No of paracetmol"
          /><br/>
          </div>
        <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno2(e.target.value);
            calcprice();
          }}  
          placeholder="No of ibuprofen"
          /><br/>
          </div>
        <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno3(e.target.value);
            calcprice();
          }}  
          placeholder="No of dolo"
          /><br/>
          </div>
          <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno4(e.target.value);
            calcprice();
          }}  
          placeholder="No of panadol"
          /><br/>
          </div>
        <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno5(e.target.value);
            calcprice();
          }}  
          placeholder="No of ariprazole"
          /><br/>
          </div>
          <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno6(e.target.value);
            calcprice();
          }}  
          placeholder="No of beds"
          /><br/>
          </div>
          <div class="input-field">
        <input 
          type="number"  
          onChange={(e) => {
            setno7(e.target.value);
            calcprice();
          }}  
          placeholder="No of oximeters"
          /><br/>
          </div>
          </div>
          <PRICE><p> The Total Cost Of Your Purchase is {price}</p></PRICE>
          <div class="action"><button onClick={buyitems}><BUTTON> <a href = 'https://rzp.io/l/m5jyAJPI' target = '_blank'>Buy These</a></BUTTON></button>  </div> 
         
   
         
        </form>
        </div>
        </div> 
        </>       
  )
  
}

export default BuyItems;