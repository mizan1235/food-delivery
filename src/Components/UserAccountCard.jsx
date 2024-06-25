import React from 'react'
import { useRecoilState } from 'recoil'
import userLoginAtom from '../Recoils/userLoginAtom'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserAccountCard = () => {
    const [userLogin,setUsetLogin]=useRecoilState(userLoginAtom)
    const [userDetails,setUserDetails]=useState(null)
    console.log(userLogin);
    useEffect(() => {
        const fetchDetails = async () => {
            const data={
                email:userLogin
            }
            //console.log(data)
          try {
            const response = await axios.post(`http://localhost/projects/foor-delivery/user-details.php`,data);

            console.log(response)
            setUserDetails(response.data.data)
          } catch (err) {
            console.log(err)
            
          }
        };
    
        fetchDetails();
      }, []);

  return (
    <div>
        <div className="account-container">
            <div className="account-element" style={{'maxWidth':'440px'}} >
                <div className="account-details" >
                    <div className="image">
                        <img src="Images/logo.svg" alt="Error" />
                    </div>
                    <div className="hello">Hello</div>
                </div>
                <div className="account-details2">
                    <div className="account-item order"  >
                    <Link to='/my-orders' className='Link-class'>My Orders</Link>
                    </div>
                    <div className="account-item">
                        <div className="account-item-data">ACCOUNT SETTINGS</div>
                        <div className="account-item-data">
                            <Link to='/account' className='Link-class'>Profile Information</Link>
                        </div>
                        <div className="account-item-data">Manage Address</div>
                        
                    </div>
                    <div className="account-item">
                    <div className="account-item-data">MY STUFF</div>
                        <div className="account-item-data">My Coupons</div>
                        <div className="account-item-data">My Review & Ratings</div>
                    </div>
                </div>
            </div>
            <div className="account-element">
                <div className="profile-info">
                    <div className="profile-information">Profile Information</div>
                    <div className="profile-information">
                        <input id="outlined-basic" label="Name" variant="outlined" value={userDetails===null?"":userDetails.name} />
                    </div>
                </div>
                <div className="profile-info">
                <div className="profile-information">Email Address</div>
                    <div className="profile-information">
                        {/* <TextField id="outlined-basic" label="" variant="outlined"value={"rahul"} /> */}
                        <input id="outlined-basic"  variant="outlined" value={userDetails===null?"":userDetails.email} />
                    </div>
                </div>
                <div className="profile-info">
                <div className="profile-information">Mobile Number</div>
                    <div className="profile-information">
                        {/* <TextField id="outlined-basic" label="" variant="outlined"value={"rahul"} /> */}
                        <input id="outlined-basic"  variant="outlined" value={userDetails===null?"":userDetails.mobile} />
                    </div>
                </div>
                <div className="profile-info">
                <div className="profile-information"> Address</div>
                    <div className="profile-information">
                        {/* <TextField id="outlined-basic" label="" variant="outlined"value={"rahul"} /> */}
                        <input id="outlined-basic"  variant="outlined" value={userDetails===null?"":userDetails.address} />
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default UserAccountCard