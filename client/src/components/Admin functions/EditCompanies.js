import Axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import isEmpty from 'is-empty'
import './EditStock.css'
 const Edit = () => {
    
    const {comp_id}= useParams();
	const [newname, setnewname] = useState('')
	const [email, setemail] = useState('')
	const [newaddress, setnewaddress] = useState('')

    const handlesave=(e)=>{
    if(isEmpty(newname) || isEmpty(email) || isEmpty(newaddress)){alert("invalid entries")}
        alert(`it has the id ${comp_id}`)
        Axios.post('http://localhost:3001/admin/updatecompany',{
            comp_id:comp_id,
            name:newname,
            email:email,
            address:newaddress,
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
		<div >
			<form >
				<span >
					Edit
				</span>

				<div >
					
					<input  type="text" onChange={(e) =>setnewname(e.target.value)} placeholder="New Company's name" />
                </div>

           
				<div  >
					
					<input  type="email" onChange={(e)=>setemail(e.target.value)}   placeholder="new email " />
					
				</div>

                <div >
	 				
					<input  type = "text" onChange={(e)=>setnewaddress(e.target.value)}   placeholder="new Address" />
				</div>
<div/>

        <button  onClick={handlesave}>Update</button>
			</form>
		</div>
	</div>

    </>
  )

}
export default Edit;