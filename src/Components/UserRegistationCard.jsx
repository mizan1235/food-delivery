import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
let error = false;
const UserRegistationCard = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const addressRef = useRef(null)
  const pinRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  const onSubmit = async(e) => {
    e.preventDefault();
    const data = {
      name: nameRef?.current?.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      pin: pinRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      // console.log(data)
      // 
      setAlertVisible(true)
    }
    try{
      const res= await axios.post('http://localhost/projects/foor-delivery/user-reg.php',data)
    console.log(res)
    if(res.data.status === 'success'){
      setSuccess(true)  
    // console.log(data)
    }
    if(res.data.status === 'error'){
      setError(true)
    }
    }
    catch(e){
      alert(e)
    }
  }

  return (
    <div className='form-cont-screen-fix'>
      {alertVisible && (
        <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{width:'100%'}}>
           Password and confirm password do not match.
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertVisible(false)}></button>
        </div>
      )}
      {
        error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{width:'100%'}}>
            error while registering.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertVisible(false)}></button>
          </div>
        )
      }
      {
        success && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
             Registereg Successfully
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertVisible(false)}></button>
          </div>
        )
      }
      <form action="" onSubmit={onSubmit}>
        <div className="reg-emp">
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label=" Full Name" variant="outlined" inputRef={nameRef} />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required inputRef={emailRef} />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="Phone " variant="outlined" type='number' required inputRef={phoneRef} />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="Address" variant="outlined" inputRef={addressRef} />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="PIN" variant="outlined" type='number' required inputRef={pinRef} />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="Password" variant="outlined" type='password'  required inputRef={passwordRef}  />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' inputRef={confirmPasswordRef} required />
          </div>

          <div className="reg-emp-item">
            <Button variant="contained" type='submit'>Sign Up</Button>
          </div>
          <div className="reg-emp-item">
            <h4 style={{ color: 'red' }}>Already signed Up *</h4>
          </div>
          <div className="reg-emp-item">
            <Button variant="contained"><Link to="/user-login">Login</Link></Button>
          </div>
        </div>
      </form>
      
    </div>
  )
}

export default UserRegistationCard