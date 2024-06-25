import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import sellerLoginAtom from '../Recoils/sellerLoginAtom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import sellerProductAtom from '../Recoils/sellerProductAtom';
const SellerHeaderCard = () => {
    const [sellerLoginDetails, setSellerLoginDetails] = useRecoilState(sellerLoginAtom);
    const [sellerProducts, setSellerProducts] = useRecoilState(sellerProductAtom)
    const [sellername,setsellername]=useState(null);
    const navigate=useNavigate();
    if(sellerLoginDetails===null){
        navigate('/seller-login')
    }
    const searchRef=useRef(null)
   
   useEffect(()=>{
    const fetchname=async()=>{
        const data={
            email:sellerLoginDetails
        }
        try{
           const res= await axios.post('http://localhost/projects/foor-delivery/seller-details.php',data);
           console.log(( res.data.data.name))
           setsellername(res.data.data.name)
        }
        catch(e){
            console.log(e)
        }
        
    }
    fetchname()

   },[])
 const onSubmit=async(e)=>{
    e.preventDefault();
    const data={
        email:sellerLoginDetails,
        search:searchRef.current.value
    }
    console.log(data)
    try{
        const res=await axios.post('http://localhost/projects/foor-delivery/search-seller-product.php',data);
        console.log(res.data.data)
        setSellerProducts(res.data.data)
        
    }
    catch(e){
        console.log(e)
    }
 }
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
                  <Link to='/seller-profile' className='Link-class'>{sellername}</Link>
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

export default SellerHeaderCard