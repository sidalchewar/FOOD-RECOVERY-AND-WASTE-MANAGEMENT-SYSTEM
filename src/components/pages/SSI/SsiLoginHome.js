import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export default function SsiLoginHome() {
    let loc=useLocation();
     let [name,setName]=useState();
     useEffect(()=>
     {
        setName(loc.state.ssi_name);
     })
  return (
    <div>
   <div>Welcome {name}</div>
   <div>Welcome {name}</div>
      
    </div>
  )
}
