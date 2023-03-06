import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import SelectionPage from './SelectionPage';

function UserLoginHome() {
    let user=useLocation();
    let nav=useNavigate();
    let [us,setUser]=useState();
    useEffect(()=>
    {
         setUser(user.state.lname);
    })
    return (
        <>
            Welcome {us}
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px"}} onClick={()=>nav("/userlogin/acceptedlist",{state:user.state})}>Accepted List</button>
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px"}} onClick={()=>nav("/userlogin/requestlist",{state:user.state})}>Request List</button>
            
          <SelectionPage></SelectionPage>
        </>
    );
}

export default UserLoginHome;