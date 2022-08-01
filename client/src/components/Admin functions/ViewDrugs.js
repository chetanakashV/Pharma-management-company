import React, {useState,useEffect} from 'react'
import Axios from 'axios'

const ViewDrugs = () => {

    const [drugsList, setDrugsList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/admin/viewstocks/viewdrugs').then((response) =>
        {
            setDrugsList(response.data);
        });
    }, []);


    return (
        <table className="table" >
        
        <thead>
          <tr>
            <th><p className='1'> Drug id </p></th>
            <th><p className='2'> Drug name </p></th>
            <th><p className='4'> Drug Cost_price </p></th>
            <th><p className='5'> Drug Sell_price </p></th>
            <th><p className='5'> Drug Quantity </p></th>
            
          </tr> 
        </thead>
        <tbody>
            {drugsList.map(drug =>
              <tr key={drug.id}>
                <td><p>{drug.drug_id}</p> </td> 
                <td><p>{drug.name} </p></td> 
                <td><p>{drug.cp} </p></td>
                <td><p>{drug.sp} </p> </td>
                <td><p>{drug.cur_quantity} </p> </td>
              </tr>
            )}
        </tbody>
        </table>
    );
}
export default ViewDrugs;