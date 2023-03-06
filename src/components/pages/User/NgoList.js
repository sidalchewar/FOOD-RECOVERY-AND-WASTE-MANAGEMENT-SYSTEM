import e from 'cors';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {Link} from 'react-router-dom';
function NgoList() {
    let loc=useLocation();
    let nav=useNavigate();
    let [showlist,setShowlist]=useState();
     let [msg,setMsg]=useState(loc.state[0].role_id.role_name);
useEffect(()=>
{
    // let list=loc.ngotable;

    let list= loc.state?.map((data,index)=>
    {
       return( <tr>
      <td key={index}>
        <div class="d-flex align-items-center">
        
          <div class="ms-3">
           {index+1}
          </div>
        </div>
      </td>
      <td>
       <b>{data.ngo_name}</b>
      </td>
      <td> 
        {data.ngo_address.street},{data.ngo_address.city},
        {data.ngo_address.state},{data.ngo_address.pin}
      </td>
      <td>{data.ngo_email}</td>
      <td>{data.ngo_phone}</td>
      <td><button class="btn btn-primary" onClick={(()=>nav("/userlogin/fooddetailsngo",{state:data}))}>Donate</button></td>
    </tr>
       )
    })

    setShowlist(list);

},[])
    // function ngodonate()
    // {

    // }
    
    return (
        <>
        
        <div style={{marginBlock:"100px",marginLeft:"100px",marginRight:"100px"}}>
        <center><h1 >List of {msg}</h1></center>
            <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
    <th>Sr No.</th>
      <th>Name of NGO</th>
      <th>Address</th>
      <th>Email</th>
      <th>Contact</th>
      <th>Donate</th>
    </tr>
  </thead>
  <tbody>
    {showlist}
  </tbody>
</table>    
        </div>
        </>
    );
}

export default NgoList;