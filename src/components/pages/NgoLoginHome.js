import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function NgoLoginHome(props) {
    let ngo=useLocation();
    let [us,setNgo]=useState();
    useEffect(()=>
    {
         setNgo(ngo.state.ngo_name);
    })
    return (
        <div>
            Welcome {us}
        </div>
    );
}

export default NgoLoginHome;