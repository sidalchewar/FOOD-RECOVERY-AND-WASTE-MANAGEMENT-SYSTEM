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
    let role1=1;
    let pass1;
    let pass2;

    let config={
      headers: { 'Content-Type': 'application/json' }
    }

    function create()
    {
      if(pass1===pass2)
      {
        let user={
          uid:0,
          fname:fname1,
          lname:lname1,
          phone:phone1,
          email:email1,
          password:pass1,
          role:role1
          // address:[{
          // aid:0,
          // street:street1,
          // city:city1,
          // dist:dist1,
          // state:state1,
          // pin:pin1}]
          }    
        
        // console.log("sid")
        axios.post("http://localhost:8000/user/register",user,config).then((response)=>
        {
          
          setRes(response.data);
          console.log(res)
          alert(response.data)
          window.location.reload();
        }).catch(()=>
        {
          alert("Not Registered")
          window.location.reload();
        })

      }
      else{
        alert("Please Enter Correct Password")
      }
    }
   
    return (
     <>
      <section class="h-100 h-custom gradient-custom-2">
     {/* <center><h1 style={{color:"blue",paddingBottom:"10px"}}><marquee width="80%" direction="left" height="50px">
     <font color="#753422">REGISTER HERE!!</font>
            {/* <font color="#252A34">e</font>
            <font color="#753422">N</font>
            <font color="#FFD523">A</font>
            <font color="#71EFA3">T</font>
            <font color="#00C1D4">E</font>
            <font color="#71EFA3">-</font>
            <font color="#0F52BA">N</font>
            <font color="#66CC66">O</font>
            <font color="#FF9966">W</font>
            <font color="#FFCCCC">:)</font> 
     </marquee></h1></center> */}
 <div class="container py-5 h-100" >
    <div class="row d-flex justify-content-center align-items-center h-100" style={{marginBottom: "-10px" , marginTop : "-50px"}}>
      <div class="col-6" style={{marginTop :"20px" , marginBottom : "-15px"}}>
        <div class="card card-registration card-registration-2" style={{borderRadius: "20px"}}>
          <div class="card-body p-0">
            <div class="row g-0" style={{marginTop: "-40px"}}>
            <div class="col-lg-12 ">
                <div class="p-5">
                  <h3 class="fw-normal mb-5" style={{color:"navy"}}>Registration  for user</h3>

                 <div class="row" style={{marginBottom: "-10px" , marginTop: "-30px"}}>
                    <div class="col-md-6 mb-4 pb-2" >

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2">First name</label>
                        <input required type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e)=>fname1=e.target.value} />
                        
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev3">Last name</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onBlur={(e)=>lname1=e.target.value}/>
                       
                      </div>

                    </div>
                  </div>

                  <div class="row" style={{marginBottom: "-10px"}}>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2">Contact</label>
                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e)=>phone1=e.target.value}/>
                        
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev3">Email</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onBlur={(e)=>email1=e.target.value} />
                       
                      </div>

                    </div>
                  </div>

                  <div class="row" style={{marginBottom: "-10px"}}>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev2">Password</label>
                        <input type="text" id="form3Examplev2" class="form-control form-control-lg" onBlur={(e)=>pass1=e.target.value} />
                       
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                      <label class="form-label" for="form3Examplev3">Confirm password</label>
                        <input type="text" id="form3Examplev3" class="form-control form-control-lg" onBlur={(e)=>pass2=e.target.value}/>
                       
                      </div>

                    </div>
                  </div>
                  <div class="row" style={{marginBottom: "-30px"}}>

                  <div class="mb-4 pb-2">
                  <label for="cars"><b>Role Of User :</b></label><br/>
                  <select name="cars" id="cars">
                      <option value="1">Residential Society</option>
                      <option value="2">Restaurant</option>
                      <option value="3">Mandis</option>
                      <option value="4">Farmer</option>
                      <option value="5">Municipality</option>
                      <option value="6">Others</option>
                  </select>
                  </div>
                  </div>
                  <div class="container">
                <div class="row">
                  <div class="col text-center mt-3" style={{marginBottom : "-20px"}}>
                    <button class="btn" style={{borderColor :"black" , width :"200px" , backgroundColor : "green" , color : "white"}} onClick={create}> Register</button>
                  </div>
                </div>
              </div>
                 </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</section>
     </>
    );
}

export default UserRegister;