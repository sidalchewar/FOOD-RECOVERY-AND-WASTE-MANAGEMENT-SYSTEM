import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function UserLoginHome(props) {
    let user=useLocation();
    let [us,setUser]=useState();
    useEffect(()=>
    {
         setUser(user.state.lname);
    })
    return (
        <div>
            Welcome {us}
        </div>
    );
}

export default UserLoginHome;