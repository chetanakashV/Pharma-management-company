import React, {  useState } from 'react'
import Axios from 'axios'
import SideBar from '../layouts/Sidebar/SidebarA';
import './AddStocks.css'
 

const AddStock = () => {
  Axios.defaults.withCredentials = true;

    
    const [nameReg, setNameReg] = useState ("");
    const [quantityReg, setQuantityReg] = useState("");
    const [CompReg, setCompReg] = useState(0);
    const [expiryReg, setExpiryReg] = useState (new Date());

    const addstock = () => {
      if(nameReg ==='' || quantityReg === 0 || CompReg === 0 || expiryReg === ''){
        alert('please enter valid values'); return;}
        Axios.post("http://localhost:3001/admin/addstock", {
         name:nameReg,
         quantity:quantityReg,
         comp_id:CompReg,
         expiry:expiryReg
        }).then((response) => {
          console.log(response);
        });
      };
  

      return (
        <>
          <SideBar/>
        <div class="login-form">
        <form>
	     	<h1>Add a Stock</h1>
        <div class="input-field">
          <label>Name</label>
        <input 
          type="text" required
          onChange={(e) => {
            setNameReg(e.target.value);
          }}  
        /><br/>
        </div>
        <div class="input-field">
          <label>Company Id</label>
        <input 
          type="text" required
          onChange={(e) => {
            setCompReg(e.target.value);
          }} 
        /><br/>
        </div>
        <div class="input-field">
        <label>Quantity</label>
        <input 
          type="number"  required
          onChange={(e) => {
            setQuantityReg(e.target.value);
          }} 
          /><br/>
          </div>
        <div class="input-field">
          <label>Expiry date</label>
        <input 
          type="date" required
          onChange={(e) => {
            setExpiryReg(e.target.value);
          }} 
          /><br/>
          </div>
          <div class="action">
        <button onClick={addstock}> Add Stock </button>
        </div>
        </form>
      
      </div>
      </>
      );
}

export default AddStock;