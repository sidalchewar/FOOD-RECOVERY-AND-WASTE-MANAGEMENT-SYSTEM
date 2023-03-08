import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react-router-dom";
import Composting from "../../images/composting.jpg"

function NgoRegister() {

    let [msg,setMsg]=useState();
    let [confirm,setConfirm]=useState('');
   
    let username1;
    let ngoname1;
    let contact1;
    let street1;
    let city1;
    let dist1;
    let state1;
    let pin1;
    let time1;
    let role1=1;
    let pass1;
    let pass2;
    let email1;
    let confpass;

    function create()
    {
                     
        if(pass1===pass2)
        {
            confpass=pass2
            let data={
              
                ngo_id:0,
                ngo_name:ngoname1,
                role_id:role1, 
                ngo_phone:contact1, 
                ngo_email:email1,
                ngo_time:time1,
                ngo_username:username1,
                ngo_password:confpass,
                ngo_address:{
                  street:street1,
                  city:city1,
                  district:dist1,
                  state:state1,
                  pin:pin1,
                  ngo_aid:0}       
              }
            axios.post("http://loclahost:8000/ngo/register",data).then((response)=>
            {
               setConfirm(response.data)
               alert(response.data)
    
            })
        }
        else{
          setMsg("Please Enter Correct Password")
        }
       
    }
    
    return (
        <>
        <div>{confirm}</div>
     <div style={{alignItems:"end", backgroundColor:"cyan",paddingLeft:"80px",paddingRight:"80px"}}>
     <center><h1 style={{color:"blue",paddingBottom:"10px"}}>Registration For SSI(Small Scale Industries)</h1></center>
     <div style={{float:"right",width:"50",height:"50"}} ><img src={Composting} width="600" height="1000"/></div>
     <form style={{display:"inline-block"}}>
  <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example1" >NGO Name</label>
        <input type="text" id="form6Example1" class="form-control" onBlur={(e)=>ngoname1=e.target.value}/>
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example2" >Contact No</label>
        <input type="text" id="form6Example2" class="form-control" onBlur={(e)=>contact1=e.target.value}/>
      </div>
    </div>
  </div>

  <div class="form-outline" style={{paddingBottom:"15px"}} >
  <label class="form-label" for="form6Example2" >Email</label>
        <input type="text" id="form6Example2" class="form-control" onBlur={(e)=>email1=e.target.value}/>
       
      </div>
  {/* <div class="form-outline mb-4">
    <input type="number" id="form6Example6" class="form-control" onBlur={(e)=>phone1=e.target.value}/>
    <label class="form-label" for="form6Example6" >Address</label>
  </div> */}
  <div style={{paddingBottom:"15px",width:"100%"}}><b>Working For</b></div>
  <div style={{paddingBottom:"10px",width:"100%"}}>
  <select onChange={(e)=>role1=e.target.value}>
    <option value="1">Child</option>
    <option value="2">Old Age</option>
    <option value="3">Street Dwellers</option>
    <option value="4">Animal</option>
  </select>
  </div>
<br></br>
  <p style={{paddingBottom:"1px"}}><b>Address</b></p>
  <br/>
  <div class="row mb-4">
   <div class="col">
    <div class="form-outline mb-4" >
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

  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4" >Opening Time and Closing Time</label>
    <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>time1=e.target.value} placeholder="eg. 10am-5pm"/>
    
    </div>
  <div class="form-outline mb-4" width="50%">
  <label class="form-label" for="form6Example4" >User Name</label>
    <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>username1=e.target.value} />
  </div>

  <div class="form-outline mb-4" width="50%">
  <label class="form-label" for="form6Example4" >Password</label>
    <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>pass1=e.target.value} />
    
  </div>
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4" >Confirm Password</label>
    <input type="text" id="form6Example4" class="form-control" onBlur={(e)=>pass2=e.target.value}/>
    
  </div>
  {msg}
<br></br>
<br></br>
<div >
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={create()} >Create</button>
  <Link to="/"><button type="submit" class="btn btn-primary btn-block mb-4" >Cancel</button></Link>
  </div>
</form>
</div>
</>
    );
}

export default NgoRegister;