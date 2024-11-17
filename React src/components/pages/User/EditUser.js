import axios from "axios";
import { useEffect, useState } from "react";
import Config from '../../Config/config'
import { ShowAddress, AddAddress, ShowPersonDetails,EditPersonDetails } from "../Resources/UserProfile"; 

   function EditUser()
    {

        let user=JSON.parse(localStorage.getItem('token'))
        let text="I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences."
        let [show,setShow]=useState("Show More");
        let limit=20
        let [aboutMe,setAboutMe]=useState(text.slice(0,limit));
        let userAddress=[]
        let [showUserAddress,setShowUserAddress]=useState()
        let [showAddressModal,setShowAddressModal]=useState(false)
        let [hidden,setHidden]=useState("")
        let [userDetails,setUserDetails]=useState(
            {
                uid : user.uid,
                fname : user.fname,
                lname : user.lname,
                email : user.email,
                phone : user.phone,
                role  : user.role,
                password : user.password
            }
        )

        useEffect(()=>
        {
           axios.get("http://localhost:8000/user/getuseraddresses/"+user.uid,Config).then((response)=>
           {
                userAddress=response.data
                setShowUserAddress(<ShowAddress userAddress={userAddress}/>)
                console.log(response.data)
                console.log(userAddress)

           }).catch(error=>
           {
                alert(error)
           })

        },[])
        
        const handleUserDetails=e=>
        {
            console.log(e)
            setUserDetails(
                {
                    ...userDetails,
                    [e.target.name] : e.target.value
                }
            
            );
            console.log(userDetails)
        };

        
        const updateUserDetails = ()=>
        {
            axios.put("http://localhost:8000/user/updateuser",userDetails,Config).then((response)=>
            {
                localStorage.setItem('token',JSON.stringify(response.data))
                user=JSON.parse(localStorage.getItem('token'))
                alert("Successfully Updated")
                setShowEditUserDetails(false)

            }).catch(error=>
            {
                alert(error)
            })
        }

        let [showEditUserDetails,setShowEditUserDetails]=useState(false)
    
        function shoMore()
        {
            if (aboutMe.length > limit ? setAboutMe(text.slice(0,limit)) & setShow("Show More"): setAboutMe(text) & setShow("Show Less"));
        }


        return(
            <>
            { showAddressModal ?<AddAddress showModal={setShowAddressModal}/>
            :

            <div class="container mt-4 mb-4 shadow p-3 mb-5 bg-white rounded" >
            <div class="row gutters justify-content-center"  >
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card text-center">
                <div class="card-body">
                    <div class="account-settings">
                        <div class="user-profile mt-2 mb-2">
                            <div class="user-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" style={{height:"100px" , width:"100px"}}/>
                            </div>
                            <h5 class="user-name mt-2 mb-2">{user.fname+" "+user.lname}</h5>
                            <h6 class="user-email">{user.email}</h6>
                        </div>
                        <div class="about mt-4">
                            <h5>About</h5>
                            <p style={{marginBottom :"-5px"}}>{aboutMe}{show=='Show More' && '...'}</p>
                            {text.length>limit && <button class='btn btn-link' style={{fontSize:"13px"}} onClick={shoMore}>{show}</button>}
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card m-2">
                         <div class="card-header text-primary">
                            <span>Person Details</span>
                            <span class='btn' style={{float:"right"}} onClick={()=>setShowEditUserDetails(true)}>Edit</span>
                          </div>
                        {
                            showEditUserDetails ?   
                                                    <EditPersonDetails functions={{userDetails:userDetails,handleUserDetails : handleUserDetails,updateUserDetails : updateUserDetails,setShowEditUserDetails : setShowEditUserDetails}}/>
                                                :
                                                    <ShowPersonDetails userDetails={userDetails}/>
                        }
                    </div>

                    <div class="card m-2">
                        <div class="card-header text-primary">
                            <span>Your Addresss</span>
                            <span class='btn' style={{float:"right"}} onClick={()=>
                                {
                                    setShowAddressModal(true)
                                    setHidden("")
                                }}>Add</span>
                        </div>
                    {showUserAddress}
                    
                    </div>
                    
                </div>
            </div>
            
            </div>
            
            </div>
            }
            </>
        )

    }


export default EditUser;