import React , {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router';
import Person from '../images/personImg.png';



function LoginHeader() {

  let [actionFlag , setActionFlag] =useState();
  let nav=useNavigate()
  let [checkToken , serCheckToken] =useState(localStorage.getItem('token'));
  let user=JSON.parse(localStorage.getItem('token'))
    return (
        <>
        <div class='row bg-dark'>
          <div class="col-6" >
        <a class="navbar-brand fs-3 ms-5" href="/userlogin/home" style={{color:"white"}}>Home</a>
        </div>
      
        <div class="col-6 text-center ">
            <div class="dropdown">
            <a  class="text-decoration-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{float:"right",marginBlock:"10px",marginRight:"50px"}} onClick={()=>actionFlag ? setActionFlag(false) : setActionFlag(true)}>
                <span ><img style={{height :"40px", width :"40px"}} src={Person}/></span><br/>
                <h8  class ="text-truncate"  style={{color : "white" }}>Hi, {user.fname+" "+user.lname}</h8>   
            </a> 
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="/userlogin/editprofile" >Edit Profile</a></li>
                <li><a class="dropdown-item" href="/userlogin/requestlist" >Requested List</a></li>
                <li><a class="dropdown-item" href="/userlogin/acceptedlist" >Accepted List</a></li>
                <li><a class="dropdown-item" onClick={()=>{
                    localStorage.removeItem('token')
                    nav("/userlogin")
                }}>Logout</a></li>
                
            </ul>
            </div>
            </div>
            </div>
        </>
    );
}

export default LoginHeader;