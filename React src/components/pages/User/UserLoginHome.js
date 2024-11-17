import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Person from '../../images/personImg.png';
import SelectionPage from './SelectionPage';
import UserLogin from './UserLogin';

function UserLoginHome() {

    let nav=useNavigate();
    let [userAction , setUserAction] =useState(<></>);
    let [actionFlag , setActionFlag] =useState();
    let [checkToken , serCheckToken] =useState(localStorage.getItem('token'));
    let loc=useLocation()
    
        if(checkToken==null)
        {
            return(
            <UserLogin/>
            )
        }
       else{
        let user=JSON.parse(localStorage.getItem('token'))
        let u=loc.state
    
    return (
        <>
        
        <div style={{paddingBottom:"50px"}}>
            
           {/* <br/><br/><br/>

            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/userlogin/acceptedlist",{state:user.state})}>Accepted List</button>
            <button style={{float:"right",marginBlock:"10px",marginRight:"50px",backgroundColor:"pink"}} onClick={()=>nav("/userlogin/requestlist",{state:user.state})}>Request List</button> */}
        </div>  
          <SelectionPage state={user.state}></SelectionPage>
        </>
    );
            }
}

export default UserLoginHome;