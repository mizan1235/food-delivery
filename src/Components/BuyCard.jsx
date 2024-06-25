import React from 'react'
import { useRecoilState } from 'recoil'
import userLoginAtom from '../Recoils/userLoginAtom'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import addressAtom from '../Recoils/addressAtom';
import { useNavigate } from 'react-router-dom';
const BuyCard = () => {
  const navigate=useNavigate()

  const [userLogin, setUserLogin] = useRecoilState(userLoginAtom)
  const [isAddress, setisAdddress] = useState(false)
  const [allAddress, setAllAddress] = useState(null)
  const [useAddress,setUseAddress]=useRecoilState(addressAtom)
  if (userLogin === null) {
    window.location.href = '/user-login'
  }

  useEffect(() => {
    const fetchData = async () => {
      const emailData={
        email:userLogin
      }
      try{
        const res = await axios.post('http://localhost/projects/foor-delivery/get-address.php' ,emailData)
        console.log(res.data.address[0].address)
        // setAllAddress(res.data)
        setAllAddress(res.data.address)
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData()
  }, [])
  const addAddress = (e) => {
    setisAdddress(true)
  }

  const nameRef=useRef(null);
  const phoneRef=useRef(null);
  const pinRef=useRef(null);
  const localityRef=useRef(null);
  const addressRef=useRef(null);
  const stateRef=useRef(null);

  const onSubmit = async(e) => {
    e.preventDefault();
    // alert('Address Added')
    const address={
      name:nameRef.current.value,
      phone:phoneRef.current.value,
      pin:pinRef.current.value,
      locality:localityRef.current.value,
      address:addressRef.current.value,
      state:stateRef.current.value,
    
    }
    
    // console.log(address)
    const data={
      email:userLogin,
      address:JSON.stringify(address)
    
    }
    
    console.log(data)
    try{
      const response=await axios.post('http://localhost/projects/foor-delivery/add-address.php',data)
      console.log(response)
    }
    catch(e){ 
      console.log(e)
    }
  }
  return (
    <div>
      <div className="address-container">
        <div className="address-header">
          <h4>Delivery Address</h4>
        </div>
        {
          allAddress && allAddress.map((address) => {
            address = JSON.parse(address.address)
            return (
              <div className="address-elements">
                <div className="address-element">
                  <input type="radio" name="address" id="address1"
                  onClick={(e)=>{
                    setUseAddress(address)
                  }} />
                  
                  <div className="address-element-details">

                    <h5>{address.name}</h5>
                    <p>{address.phone}</p>
                    <p>{address.pin}</p>
                    <p>{address.locality}</p>
                    <p>{address.address}</p>
                    <p>{address.state}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
        <div className="address-elements" style={{ 'color': '#2874f0', 'padding': '15px' }} onClick={addAddress}>
          + &nbsp;&nbsp; Add New Address
          {
            isAddress && (
              <div className="address-elements">
                <div className="address-element">
                  <input type="radio" name="address" id="address1"  onClick={(e)=>{
                    const address={
                      name:nameRef.current.value,
                      phone:phoneRef.current.value,
                      pin:pinRef.current.value,
                      locality:localityRef.current.value,
                      address:addressRef.current.value,
                      state:stateRef.current.value,
                    
                    }
                    setUseAddress(address)
                  }} />
                  <form action="" onSubmit={onSubmit}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" className='add-address-btn' required style={{'margin-bottom':'8px'}} inputRef={nameRef}/>
                    <TextField id="outlined-basic" label="Phone" variant="outlined" type='number' className='add-address-btn' required style={{'margin-bottom':'8px'}} inputRef={phoneRef}/>
                    <TextField id="outlined-basic" label="pin" variant="outlined" type='number' className='add-address-btn' required style={{'margin-bottom':'8px'}} inputRef={pinRef}/>
                    <TextField id="outlined-basic" label="locality" variant="outlined" className='add-address-btn' required style={{'margin-bottom':'8px'}} inputRef={localityRef}/>
                    <TextField id="outlined-basic" label="Address" variant="outlined" className='add-address-btn' required style={{'margin-bottom':'8px'}} inputRef={addressRef}/>
                    <TextField id="outlined-basic" label="State" variant="outlined" className='add-address-btn' required style={{'margin-bottom':'8px'}} inputRef={stateRef}/>
                    <Button variant="contained" color="primary" type='submit'>Save</Button>
                  </form>
                </div>
              </div>
            )
          }
        </div>
          <div>
            <Button variant="contained" color="primary" style={{'margin':'15px'}} onClick={()=>{
              // window.location.href='/payment'
             if(useAddress) navigate('/payment')
              console.log(useAddress)
            }}>Proceed to Payment</Button>
          </div>
      </div>
    </div>
  )
}

export default BuyCard