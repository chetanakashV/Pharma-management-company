import Axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import isEmpty from 'is-empty'

 const EditStock = () => {
    
    const {stock_id}= useParams();
	const [quantity,setQuantity] = useState(0);

    const handlesave=(e)=>{

        Axios.post('http://localhost:3001/admin/editstock',{
            stock_id:stock_id,
            quantity :quantity
        }).then((resp)=>{
            if(resp.data.ff==='s')
            {
                alert('Updated')
            }
            else
            {
                alert('Not Updated')
            }
        })
        e.preventDefault()
      
     }
  return (
    <>
    <div >
		<div class="login-form">
			<form >
				<h1>
					Edit
				</h1>
                <div class="content">
                <div class="input-field">
	 				
					<input  type = "Number" onChange={(e)=>setQuantity(e.target.value)}   placeholder="new Quantity" />
				</div>
                </div>
<div/>
            <div class="action">
        <button  class="button" onClick={handlesave}>Update</button>
        </div>
			</form>
		</div>
	</div>

    </>
  )

}
export default EditStock;