import React, { useState } from 'react'
import axios from 'axios';
import { useRef } from 'react'
import { useRecoilState } from 'recoil';
import getProductAtom from '../Recoils/getProductAtom';
import { Link } from 'react-router-dom';
import userLoginAtom from '../Recoils/userLoginAtom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const UserHeaderCard = () => {

    const [getProduct, setGetProduct] = useRecoilState(getProductAtom);
    const [userLogin,setUserLogin]=useRecoilState(userLoginAtom)
    const [username,setusername]=useState(null)
    const navigate=useNavigate()
    if(userLogin===null){
        navigate('/user-login')
    }
  const searchRef = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(searchRef.current.value)
    const data = {
      search: searchRef.current.value
    }
    try {
      const response = await axios.post('http://localhost/projects/foor-delivery/search-product.php', data)
      console.log(response.data.data)
      setGetProduct(response.data.data)
    }
    catch (error) {
      console.log(error )
    }

  }
  useEffect(()=>{
    const fetchname=async()=>{
        const data={
            email:userLogin
        }
        try{
           const res= await axios.post('http://localhost/projects/foor-delivery/user-details.php',data);
           console.log(( res.data.data.name))
          //  setsellername(res.data.data.name)
          setusername(res.data.data.name)
        }
        catch(e){
            console.log(e)
        }
        
    }
    fetchname()

   },[])
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">

          <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon ">
              <img src="/Images/toggle.png" alt="" className='toggle' />
            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" >
                  <Link to='/' className='Link-class'>Home</Link>
                </div>
              </li>
              
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" >
                  <Link to='/user-login' className='Link-class'>{username}</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active " aria-current="page"  >
                  <Link to="/account" className='Link-class'> My Account</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link active " aria-current="page"  >
                  <Link to="/user-card" className='Link-class'> Cart</Link>
                </div>
              </li>
            



            </ul>
            <form className="d-flex" role="search" onSubmit={onSubmit}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={searchRef} />
              <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default UserHeaderCard