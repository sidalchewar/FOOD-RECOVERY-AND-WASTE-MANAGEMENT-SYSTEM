import React from 'react';
import  ReactDOM  from 'react-dom/client';
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SsiRegister(props) {
  let [msg, setMsg] = useState();
  let [confirm, setConfirm] = useState('');

  let username1;
  let ssiname1;
  let contact1;
  let street1;
  let city1;
  let dist1;
  let state1;
  let pin1;
  let time1;
  
  let pass1;
  let pass2;
  let email1;
  let confpass;
  function create() {

    if (pass1 === pass2) {
      confpass = pass2
      let data = {

        ssi_id: 0,
        ssi_name: ssiname1,
        
        ssi_phone: contact1,
        ssi_email: email1,
        ssi_time: time1,
        ssi_username: username1,
        ssi_password: confpass,
        ssi_address: {
          street: street1,
          city: city1,
          district: dist1,
          state: state1,
          pin: pin1,
          ssi_aid: 0
        }
      }
      // axios.post(" ", data).then((response) => {
      //   setConfirm(response.data)
      //   alert(response.data)

      // })
    }
    else {
      setMsg("Please Enter Correct Password")
    }

  }


  return (
    <>
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>

                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="form6Example1" class="form-control" onBlur={(e) => ssiname1 = e.target.value} />
                          <label class="form-label" for="firstName">SSI Name</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => contact1 = e.target.value} />
                          <label class="form-label" for="lastName">Contact</label>
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="form6Example2" class="form-control" onBlur={(e) => email1 = e.target.value} />
                          <label class="form-label" for="firstName">Email</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <label class="form-label" for="form6Example4" >Opening Time and Closing Time</label>
                          <input type="text" id="form6Example4" class="form-control" onBlur={(e) => time1 = e.target.value} placeholder="eg. 10am-5pm" />

                          <p style={{ paddingBottom: "1px" }}><b>Address</b></p>
                          <br />
                          <div class="row mb-4">
                            <div class="col">
                              <div class="form-outline mb-4" >
                                <label class="form-label" for="form6Example4" >Street</label>
                                <input type="text" id="form6Example4" class="form-control" onBlur={(e) => street1 = e.target.value} />

                              </div>
                            </div>
                            <div class="col">
                              <div class="form-outline mb-4">
                                <label class="form-label" for="form6Example4" >City</label>
                                <input type="text" id="form6Example4" class="form-control" onBlur={(e) => city1 = e.target.value} />
                              </div>
                            </div>
                          </div>

                          <div class="row mb-4">
                            <div class="col">
                              <div class="form-outline mb-4">
                                <label class="form-label" for="form6Example4" >District</label>
                                <input type="text" id="form6Example4" class="form-control" onBlur={(e) => dist1 = e.target.value} />

                              </div>
                            </div>
                            <div class="col">
                              <div class="form-outline mb-4">
                                <label class="form-label" for="form6Example4" >State</label>
                                <input type="text" id="form6Example4" class="form-control" onBlur={(e) => state1 = e.target.value} />

                              </div>
                            </div>
                          </div>

                          <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example4"  >Pin</label>
                            <input type="number" id="form6Example4" class="form-control" onBlur={(e) => pin1 = e.target.value} />

                          </div>



                          <label class="form-label" for="lastName">time</label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="text" id="form6Example4" class="form-control" onBlur={(e) => username1 = e.target.value} />
                          <label class="form-label" for="emailAddress">User Name</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="text" id="form6Example4" class="form-control" onBlur={(e) => pass1 = e.target.value} />
                          <label class="form-label" for="phoneNumber">Password</label>
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="text" id="form6Example4" class="form-control" onBlur={(e) => pass2 = e.target.value} />
                          <label class="form-label" for="emailAddress">Confirm Password</label>
                        </div>

                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                      <button type="submit" class="btn btn-primary btn-block mb-4" onClick={create()} >Create</button>
                      <Link to="/home"><button type="submit" class="btn btn-primary btn-block mb-4" >Cancel</button></Link>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    </>

  );
}

