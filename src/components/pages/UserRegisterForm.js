import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useLocation , useNavigation} from "react-router-dom";
import {Link} from "react-router-dom";

function UserRegister() {
    let loc=useLocation();
  let [res,setRes]=useState();
    let fname1;
    let lname1;
    let phone1;
    let email1;
    let street1;
    let city1;
    let dist1;
    let state1;
    let pin1;
    let role1;
    let pass1;
    let pass2;

    function create()
    {
      if(pass1===pass2)
      {
        let data={
          uid:0,
          fname:fname1,
          lname:lname1,
          phone:phone1,
          email:email1,
          password:pass1,
          role:role1 ,
          address:[{
          aid:0,
          street:street1,
          city:city1,
          dist:dist1,
          state:state1,
          pin:pin1}],
          }    
        
        // console.log("sid")
        axios.post("http://localhost:8000/user/register",data).then((response)=>
        {
          
          // setRes(response.data);
          // console.log(res)
          // alert(response.data)
          
        })
      }
      else{
        alert("Please Enter Correct Password")
      }
    }
   
    return (
     <>
     <div style={{color:"green"}}>{res}</div>
     <div style={{alignItems:"end", backgroundColor:"cyan",paddingLeft:"80px",paddingRight:"80px"}}>
     
     <center><h1 style={{color:"blue"}}>Registration For User</h1></center>
     <form style={{display:"inline-block"}}>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example1" >First Name</label>
        <input type="text" id="form6Example1" class="form-control" onBlur={(e)=>fname1=e.target.value}/>
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example2" >Last Name</label>
        <input type="text" id="form6Example2" class="form-control" onBlur={(e)=>lname1=e.target.value}/>
        
      </div>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col">
    <div class="form-outline mb-4">
    <label class="form-label" for="form6Example6" >Phone</label>
      <input type="number" id="form6Example6" class="form-control" onBlur={(e)=>phone1=e.target.value}/>  
    </div>
    </div>
    <div class="col">
    <div class="form-outline mb-4">
    <label class="form-label" for="form6Example3" >Email</label>
      <input type="text" id="form6Example3" class="form-control" onBlur={(e)=>email1=e.target.value}/>
      </div>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col">
    <div class="form-outline mb-4">
    <label class="form-label" for="form6Example6" >Password</label>
      <input type="text" id="form6Example6" class="form-control" onBlur={(e)=>pass1=e.target.value}/>  
    </div>
    </div>
    <div class="col">
    <div class="form-outline mb-4">
    <label class="form-label" for="form6Example3" >Confirm Password</label>
      <input type="text" id="form6Example3" class="form-control" onBlur={(e)=>pass2=e.target.value}/>
      </div>
    </div>
  </div>
  <p style={{paddingBottom:"1px"}}><b>Address</b></p>
  <div class="row mb-4">
   <div class="col">
    <div class="form-outline mb-4">
    <label class="form-label" for="form6Example4" >Street</label>
      <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>street1=e.target.value}/>
      
    </div>
    </div>
    <div class="col">
    <div class="form-outline mb-4">
    <label class="form-label" for="form6Example4" >City</label>
      <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>city1=e.target.value}/>
     
    </div>
    </div>
  </div>
  <div class="row mb-4">
   <div class="col">
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4" >District</label>
    <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>dist1=e.target.value}/>
    
  </div>
  </div>
  <div class="col">
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4" >State</label>
    <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>state1=e.target.value}/>
    
  </div>
  </div>
  </div>
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4"  >Pin</label>
    <input type="number" id="form6Example4" class="form-control" onBlur={(e)=>pin1=e.target.value}/>
   
  </div>
  <p style={{paddingBottom:"1px"}}><b>Role Of User</b></p>
  <select onChange={(e)=>role1=e.target.value}>
    <option value="1">Residential Society</option>
    <option value="2">Restaurant</option>
    <option value="3">Mandis</option>
    <option value="4">Farmer</option>
    <option value="5">Municipalty</option>
    <option value="6">Others</option>
  </select>
<br></br>
<br></br>
<div >
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={create} >Submit</button>
  <Link to="/home"><button type="submit" class="btn btn-primary btn-block mb-4" >Cancel</button></Link>
  </div>
</form>
</div>
     </>
    );
}

export default UserRegister;