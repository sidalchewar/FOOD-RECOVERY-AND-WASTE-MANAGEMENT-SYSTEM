import axios from "axios";
import { useState } from "react";
export function ShowPersonDetails({userDetails})
{
    return(
        <>
            <div class="row m-2">
                <div class='col-6'>
                    <span>First Name</span>
                    <p style={{fontWeight:"bold"}}>{userDetails.fname}</p>
                </div>

                <div class='col-6'>
                    <span>Last Name</span>
                    <p style={{fontWeight:"bold"}}>{userDetails.lname}</p>
                </div>
            </div>

            <div class="row m-2">
                    <div class='col-6'>
                        <span>Email</span>
                        <p style={{fontWeight:"bold"}}>{userDetails.email}</p>
                    </div>
                    <div class='col-6'>
                        <span>Phone</span>
                        <p style={{fontWeight:"bold"}}>{userDetails.phone}</p>
                    </div>
            </div>

         </>
    )
}

export function EditPersonDetails({functions})
{
    const userDetails            =functions.userDetails
    const handleUserDetails      = functions.handleUserDetails
    const setShowEditUserDetails = functions.setShowEditUserDetails
    const updateUserDetails      = functions.updateUserDetails;

    return(
        <>
            <div class="row gutters">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2 mb-2">
                        <div class="form-group m-2">
                            <label for="fname">First Name</label>
                            <input type="text" class="form-control" name="fname" Value={userDetails.fname}  onChange={handleUserDetails}
                            />
                        </div>
                    </div>
                     <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2 mb-2">
                        <div class="form-group m-2">
                            <label for="lname">Last Name</label>
                            <input type="text" class="form-control" name="lname" Value={userDetails.lname}  onChange={handleUserDetails}/>
                        </div>
                     </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2 mb-2">
                        <div class="form-group m-2">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" name="email" Value={userDetails.email}  onChange={handleUserDetails}/>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-2 mb-2">
                        <div class="form-group m-2">
                            <label for="phone">Phone</label>
                            <input type="text" class="form-control" name="phone" Value={userDetails.phone}  onChange={handleUserDetails}/>
                        </div>
                     </div>

                     <div class='row' >
                        <div class='col' >
                            <button class='btn btn-primary m-2 p-1 ps-4 pe-4' style={{float:"right"}} onClick={updateUserDetails}>Save</button>
                            <button class='btn m-2 p-1 ps-4 pe-4' style={{backgroundColor:"#dcdcdc",float:"right"}} onClick={()=>setShowEditUserDetails(false)}>Cancel</button>
                        </div>
                    </div>
            </div>
        </>
    )
}


export function AddAddress({showModal})
{
    const User = JSON.parse(localStorage.getItem("token"))
    let states=[
        "Maharashtra",
        "Andra pradesh",
        "Telangana",
        "Tamilnadu",
        "Delhi"
    ]

    let country=[
        "India",
        "Australia",
        "Russia",
        "China"
    ]

    const [address,setAddress]=useState(
        {
            fullname  : null,
            mobileno  : null,
            apartment : null,
            street    : null,
            city      : null,
            state     : null,
            country   : "India",
            pincode   : null,
            user      : User,
            defaultaddress : false

        }
    )

    const AddAddressFunc = (data)=>
    {
        console.log(data)
        console.log(data.target.type)
        if(data.target.type=="tel")
        {
            setAddress(
                {
                    ...address,
                    [data.target.name] : parseInt(data.target.value)
                })                                     

        }else{
            setAddress(
                {
                    ...address,
                    [data.target.name] : data.target.value
                })
        }
        
        console.log(address)
    }

    const AddAddressAPI = (e)=>
    {
        console.log("Address"+address)
        axios.post("http://localhost:8000/user/adduseraddress",address).then(response=>
        {
            response.data && alert("Succesfully Added")
            setInterval(
                    window.location.reload()
                ,2000
            )
            console.log(response.data)
        }).catch(error=>
            {
                alert(error)
            })
        
        e.preventDefault()
    }

   return(
    <>
     <div class='container bg-dark w-50 text-light justify-content-center mt-3 mb-5 py-5' >
        <form >
        <div class='form-header row'>
            <div class='col'>
                <h2 >Add Address</h2>
            </div>
            <div class='col'>
                <button class='btn text-white fw-bold float-end' style={{marginTop:"-45px",marginRight:"-10px"}} onClick={()=>showModal(false)}>X</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
            <label class='m-2' for="fullname">Full Name (First and Last name)</label>
            <input type="text" class="form-control" name="fullname" placeholder="Full name" onBlur={AddAddressFunc} required/>
            </div>
            <div class="col-6">
            <label class='m-2' for="mobileno">Mobile Number</label>
            <input type="tel" class="form-control" name="mobileno" placeholder="Mobile number" maxLength={10} onBlur={AddAddressFunc} required/>
            </div>
        </div>
        <div class="form-group mb-2">
            <label class='m-2' for="apartment">Flat, House no., Building, Company, Apartment</label>
            <input type="text" class="form-control" name="apartment" placeholder="Flat, House no...." onBlur={AddAddressFunc}/>
        </div>
        <div class="form-group mb-2">
            <label class='m-2' for="street">Area, Street, Sector, Village</label>
            <input type="text" class="form-control" name="street" placeholder="Area, Street..." onBlur={AddAddressFunc} required/>
        </div>
        <div class="row mb-2">
            <div class="form-group col-4">
            <label class='m-2' for="city">City</label>
            <input type="text" class="form-control" name="city" placeholder="City name" onBlur={AddAddressFunc} required/>
            </div>
            <div class="form-group col-4">
            <label class='m-2' for="inputState">State</label>
            <select id="inputState" class="form-control" name="state" onChange={AddAddressFunc} required>
                <option >State</option>
                {states.map(e=>
                    {
                        return(
                        <option name="state" value={e} >{e}</option>
                        )

                    })}
            </select>
            </div>
            <div class="form-group col-4">
            <label class='m-2' for="inputState">Country</label>
            <select id="inputCountry" class="form-control" name="country" onChange={AddAddressFunc}>
                {country.map((e,index)=>
                {
                    return(
                        <>
                        {e=="India"?<option name="country" value={e} selected>{e}</option>:<option name="country" value={e}>{e}</option>}
                        </>
                    )
                })}
            </select>
            </div>
        </div>

        <div class="row mb-2">
           
            <div class="form-group col-2">
            <label class='m-2' for="pincode">Pincode</label>
            <input type="tel" class="form-control" name="pincode" maxLength={6} onBlur={AddAddressFunc} required/>
            </div>
        </div>
        
        <button type="submit" class="btn btn-primary float-end mb-2 me-3" onClick={AddAddressAPI}>Save</button>
        <button type="submit" class="btn btn-light float-end mb-2 me-3" onClick={()=> showModal(false)}>Close</button>
        </form>
     </div>
            
    </>
   )
}


export function ShowAddress({userAddress})
{

    let [textDecor,setTextDecor]=useState("text-decoration-none text-info")
    console.log(userAddress)

    const setDefaultAddressAPI = (aid)=>
    {
        const existingDefaultAddress=userAddress.find(data=>
            {
                return data.defaultaddress;
            })
        
        console.log(existingDefaultAddress)

        if(existingDefaultAddress)
        {
        axios.post("http://localhost:8000/user/makedefaultaddress/"+aid,existingDefaultAddress).then(response=>
        {
            window.location.reload()
        }).catch(error=>
            {
                alert(error)
            })
        }
        else{
            axios.post("http://localhost:8000/user/makedefaultaddress/"+aid,{}).then(response=>
        {
            window.location.reload()
        }).catch(error=>
            {
                alert(error)
            })

        }

    }

    const removeAddress = (aid)=>
    {
        axios.delete("http://localhost:8000/user/removeuseraddress/"+aid).then(()=>
        {
            window.location.reload()
        }).catch(error=>
            {
                alert(error)
            })
    }

    if(userAddress!=null)
    {
        return(
                <>
                        {userAddress?.sort((a,b)=>a.defaultaddress < b.defaultaddress ? 1 : -1).map((data,index)=>
                        {
                            
                        return( 
                            <>
                            {data.defaultaddress?
                            <>
                             <div class='row m-2'>
                                <div class='col'>
                                    <div class="card shadow bg-white rounded" >
                                    <h5 class="card-header">Default</h5>
                                        <div class="card-body">
                                            <h5 class="card-title">{data.fullname}</h5>
                                            <p class="card-text">{data.apartment},{data.street}, {data.city}, {data.state}, {data.country} {data.pincode}</p>
                                            <p class="card-text">Phone number: {data.mobileno}</p>
                                            <a href="#" class='fs-6 m-2 text-decoration-none' >Edit</a>|<a href="#" class='fs-6 m-2 text-decoration-none'  onClick={()=>removeAddress(data.aid)}>Remove</a>
                                        </div>
                                    </div>
                                </div>    
                            </div>

                            </>
                            :
                        <>
                            <div class='row m-2'>
                                <div class='col'>
                                    <div class="card shadow bg-white rounded" >
                                        <div class="card-body">
                                            <h5 class="card-title">{data.fullname}</h5>
                                            <p class="card-text">{data.apartment},{data.street}, {data.city}, {data.state}, {data.country} {data.pincode}</p>
                                            <p class="card-text">Phone number: {data.mobileno}</p>
                                            <a href="#" class='fs-6 m-2 text-decoration-none' >Edit</a>|<a class='fs-6 m-2 text-decoration-none'  >Remove</a>|<a href="#" class='fs-6 m-2 text-decoration-none' onClick={()=>setDefaultAddressAPI(data.aid)}>Set as Default</a>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </>
                        }
                        </>)  
                        }
                        )}
                </>
             )
    }
    else{
        return(
            <>
            <div class="row text-center m-2">
                   <span class="text-secondary">No Records Found</span>
             </div>
            </>
        )
    }

}

export function EditAddress({showModal})
{
    const User = JSON.parse(localStorage.getItem("token"))
    let states=[
        "Maharashtra",
        "Andra pradesh",
        "Telangana",
        "Tamilnadu",
        "Delhi"
    ]

    let country=[
        "India",
        "Australia",
        "Russia",
        "China"
    ]

    const [address,setAddress]=useState(
        {
            fullname  : null,
            mobileno  : null,
            apartment : null,
            street    : null,
            city      : null,
            state     : null,
            country   : "India",
            pincode   : null,
            user      : User,
            defaultaddress : false

        }
    )

    const AddAddressFunc = (data)=>
    {
        console.log(data)
        console.log(data.target.type)
        if(data.target.type=="tel")
        {
            setAddress(
                {
                    ...address,
                    [data.target.name] : parseInt(data.target.value)
                })                                     

        }else{
            setAddress(
                {
                    ...address,
                    [data.target.name] : data.target.value
                })
        }
        
        console.log(address)
    }

    const AddAddressAPI = (e)=>
    {
        console.log("Address"+address)
        axios.post("http://localhost:8000/user/adduseraddress",address).then(response=>
        {
            response.data && alert("Succesfully Added")
            setInterval(
                    window.location.reload()
                ,2000
            )
            console.log(response.data)
        }).catch(error=>
            {
                alert(error)
            })
        
        e.preventDefault()
    }

   return(
    <>
     <div class='container bg-dark w-50 text-light justify-content-center mt-3 mb-5 py-5' >
        <form >
        <div class='form-header row'>
            <div class='col'>
                <h2 >Add Address</h2>
            </div>
            <div class='col'>
                <button class='btn text-white fw-bold float-end' style={{marginTop:"-45px",marginRight:"-10px"}} onClick={()=>showModal(false)}>X</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
            <label class='m-2' for="fullname">Full Name (First and Last name)</label>
            <input type="text" class="form-control" name="fullname" placeholder="Full name" onBlur={AddAddressFunc} required/>
            </div>
            <div class="col-6">
            <label class='m-2' for="mobileno">Mobile Number</label>
            <input type="tel" class="form-control" name="mobileno" placeholder="Mobile number" maxLength={10} onBlur={AddAddressFunc} required/>
            </div>
        </div>
        <div class="form-group mb-2">
            <label class='m-2' for="apartment">Flat, House no., Building, Company, Apartment</label>
            <input type="text" class="form-control" name="apartment" placeholder="Flat, House no...." onBlur={AddAddressFunc}/>
        </div>
        <div class="form-group mb-2">
            <label class='m-2' for="street">Area, Street, Sector, Village</label>
            <input type="text" class="form-control" name="street" placeholder="Area, Street..." onBlur={AddAddressFunc} required/>
        </div>
        <div class="row mb-2">
            <div class="form-group col-4">
            <label class='m-2' for="city">City</label>
            <input type="text" class="form-control" name="city" placeholder="City name" onBlur={AddAddressFunc} required/>
            </div>
            <div class="form-group col-4">
            <label class='m-2' for="inputState">State</label>
            <select id="inputState" class="form-control" name="state" onChange={AddAddressFunc} required>
                <option >State</option>
                {states.map(e=>
                    {
                        return(
                        <option name="state" value={e} >{e}</option>
                        )

                    })}
            </select>
            </div>
            <div class="form-group col-4">
            <label class='m-2' for="inputState">Country</label>
            <select id="inputCountry" class="form-control" name="country" onChange={AddAddressFunc}>
                {country.map((e,index)=>
                {
                    return(
                        <>
                        {e=="India"?<option name="country" value={e} selected>{e}</option>:<option name="country" value={e}>{e}</option>}
                        </>
                    )
                })}
            </select>
            </div>
        </div>

        <div class="row mb-2">
           
            <div class="form-group col-2">
            <label class='m-2' for="pincode">Pincode</label>
            <input type="tel" class="form-control" name="pincode" maxLength={6} onBlur={AddAddressFunc} required/>
            </div>
        </div>
        
        <button type="submit" class="btn btn-primary float-end mb-2 me-3" onClick={AddAddressAPI}>Save</button>
        <button type="submit" class="btn btn-light float-end mb-2 me-3" onClick={()=> showModal(false)}>Close</button>
        </form>
     </div>
            
    </>
   )
}

