import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function AcceptedList(props) {
    let loc=useLocation();
    let userid=loc.state.uid;
    let [requestfood,setRequestfood]=useState();
    useEffect(()=>
    {
        axios.get("http://localhost:8000/fooddetails/requestlist/"+userid).then((response)=>
        {
              setRequestfood(response.data)
            
        })
    },[])
    return (
        <>
        <div>
            <div>{loc.state.fname}</div>
            <div>{loc.state.uid}</div>
        </div>
        <div class="card" style={{marginBlock:"20px",marginLeft:"70px",marginRight:"70px"}}>
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div class="badge badge-success rounded-pill d-inline" style={{backgroundColor:"green"}}>Accepted</div>
  </div>
</div>
        </>
    );
}

export default AcceptedList;