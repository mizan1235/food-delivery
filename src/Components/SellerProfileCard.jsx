import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import sellerLoginAtom from '../Recoils/sellerLoginAtom'
import { useEffect,useState } from 'react'
import axios from 'axios'
const SellerProfileCard = () => {
    const [sellerLoginDetails, setSellerLoginDetails] = useRecoilState(sellerLoginAtom)
    const [sellerDetails, setSellerDetails] = useState(null)
    useEffect(() => {
        const fetchDetails = async () => {
            const data={
                email:sellerLoginDetails
            }
            //console.log(data)
          try {
            const response = await axios.post(`http://localhost/projects/foor-delivery/seller-details.php`,data);

            console.log(response)
            setSellerDetails(response.data.data)
            
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
                    <Link to='/seller-product' className='Link-class'>My Products</Link>
                    </div>
                    <div className="account-item">
                        <div className="account-item-data">ACCOUNT SETTINGS</div>
                        <div className="account-item-data">
                            <Link to='/seller-profile' className='Link-class'>Profile Information</Link>
                        </div>
                        <div className="account-item-data"> <Link className='Link-class' to='/add-product'>Add Product</Link></div>
                        
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
                        <input id="outlined-basic" label="Name" variant="outlined"
                          value={sellerDetails===null?"":sellerDetails.name}
                          />
                    </div>
                </div>
                <div className="profile-info">
                <div className="profile-information">Email Address</div>
                    <div className="profile-information">
                        {/* <TextField id="outlined-basic" label="" variant="outlined"value={"rahul"} /> */}
                        <input id="outlined-basic"  variant="outlined" 
                        value={sellerDetails===null?"":sellerDetails.email}
                         />
                    </div>
                </div>
                <div className="profile-info">
                <div className="profile-information">Mobile Number</div>
                    <div className="profile-information">
                        {/* <TextField id="outlined-basic" label="" variant="outlined"value={"rahul"} /> */}
                        <input id="outlined-basic"  variant="outlined"
                         value={sellerDetails===null?"":sellerDetails.phone}
                          />
                    </div>
                </div>
                <div className="profile-info">
                <div className="profile-information"> Address</div>
                    <div className="profile-information">
                        {/* <TextField id="outlined-basic" label="" variant="outlined"value={"rahul"} /> */}
                        <input id="outlined-basic"  variant="outlined"
                         value={sellerDetails===null?"":sellerDetails.address}
                          />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerProfileCard