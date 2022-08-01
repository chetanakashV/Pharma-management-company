import React, {useState,useEffect} from 'react'
import Axios from 'axios'
 
const ViewCovid = () => {

    const [ covidList, setCovidList] = useState({});
    useEffect(() => {
      Axios.get('http://localhost:3001/admin/viewstocks/viewcovid').then((response) =>
      {
          setCovidList(response.data);
      });
  }, []);

    return (
        <table className="table" >
        
        <thead>
          <tr>
            <th><p className='1'> Covid_need id </p></th>
            <th><p className='2'> Covid_need name </p></th>
            <th><p className='4'> Covid_need Cost_price </p></th>
            <th><p className='5'> Covid_need Sell_price </p></th>
            <th><p className='5'> Covid_need Quantity </p></th>
            
          </tr> 
        </thead>
        <tbody>
            {covidList.map(covid =>
              <tr key={covid.id}>
                <td><p>{covid.prod_id}</p> </td> 
                <td><p>{covid.name} </p></td> 
                <td><p>{covid.cp} </p></td>
                <td><p>{covid.sp} </p> </td>
                <td><p>{covid.cur_quantity}</p></td>
              </tr>
            )}
        </tbody>
        </table>
    );
}
export default ViewCovid; 