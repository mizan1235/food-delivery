import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import userLoginAtom from '../Recoils/userLoginAtom';
import { useNavigate } from 'react-router-dom';
const UserLoginCard = () => {
    const navigate=useNavigate()
    const [userLogin,setUserLogin]=useRecoilState(userLoginAtom)

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false);
    const [notmatch, setNotmatch] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    const onSubmit = async(e) => {
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        try{
          const res = await axios.post('http://localhost/projects/foor-delivery/user-login.php', 
            data)
        console.log(res)
        if (res.data.status === 'success') {
            setSuccess(true)
            setUserLogin(data.email)
            navigate('/')

        }
       
        else if(res.data.status === 'notmatch'){
            setNotmatch(true)
            console.log(res)
        }
        else {
            setError(true)
        }
        
        }
        catch(e){
          // console.log(first)
          alert(e)
        }
    }
  return (
    <div className='form-cont-screen-fix'>
        {
        error && (
            <div class="alert alert-danger alert-dismissible fade show" role="alert" style={{width:'100%'}}>
                Account not found. please register
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
      {
        success && (
            <div class="alert alert-success alert-dismissible fade show" role="alert" style={{width:'100%'}}>
           successfully loged in
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
      {
        notmatch && (
            <div class="alert alert-warning alert-dismissible fade show" role="alert"style={{width:'100%'}}>
           password doesn't match
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
       <form action="" onSubmit={onSubmit}>
       <div className="reg-emp">
                <div className="reg-emp-item">
                    <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required inputRef={emailRef} />
                </div>
                <div className="reg-emp-item">
                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' required  inputRef={passwordRef}/>
                </div>
                <div className="reg-emp-item">
                    <Button variant="contained" type='submit'>Login</Button>
                </div>
                <div className="reg-emp-item">
                    <h4 style={{ color: 'red' }}>Don't have account *</h4>
                </div>
                <div className="reg-emp-item">
                    <Button variant="contained"><Link to="/user-registration">Create Account</Link></Button>
                </div>
            </div>
       </form>
    </div>
  )
}

export default UserLoginCard