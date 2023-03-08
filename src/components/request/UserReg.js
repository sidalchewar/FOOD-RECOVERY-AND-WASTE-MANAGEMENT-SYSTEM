import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserRegister from '../pages/UserRegisterForm';
import { Navigate } from "react-router-dom";
import {Link, useNavigate} from 'react-router-dom';

function UserReg(props) {
   
     let nav=useNavigate();
     let [ms,setMs]=useState();
    // let data={name:"siddhant"};
    // const loggedIn = false; // Replace with auth check logic
    useEffect(()=>
    axios.get("http://localhost:8000/user/login").then((res)=>
    {
        let user=res.data;
        console.log(user.uname)
        let msg={name:"siddhant",role:"user"}
        nav("/userregister",{user})
    })
    
    )
    // useEffect(()=>
    // {
    // let msg={name:"siddhant",role:"user"}
    // setMs(msg)
    // nav("/userregister","sid")
    // }
    // )

    // return(
    //     <>
    //     {/* <Link to="/userregister" state={data}>Go</Link> */}
    //     </>
    // )
}

export default UserReg;