import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

const MyprofileU = () => {
    const [userDetails,setUserDetails] = useState({});
    const {username} = useParams();
    useEffect =() =>{
        Axios.get(`http://localhost:3001/user/viewdetails/${username}`).then((response) =>{
            setUserDetails(response);
        })
    }
    return (
        <div>
            {userDetails(member =>{
                   {member.userid} <br/>
                  {member.name} <br/>
                 {member.username} <br/>
                  {member.Email} <br/>
            })}
        </div>
    );
}

export default MyprofileU;