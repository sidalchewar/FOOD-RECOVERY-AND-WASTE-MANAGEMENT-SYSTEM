import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../inc/Header';
import HomeSlider from '../../inc/HomeSlider';

function Home(props) {
    let loc=useLocation();
    let [msg,setMsg]=useState();
    // useEffect(()=>
    // {
    //      setMsg(loc.state.fname);
    // //     console.log(loc);
    //      console.log("--"+loc.state.fname);
    // })
    
    return (
        <div>
            <h1>Home</h1>
            <HomeSlider></HomeSlider>
        </div>
    );
}

export default Home;