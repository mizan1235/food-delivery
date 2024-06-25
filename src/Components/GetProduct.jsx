import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import getProductAtom from '../Recoils/getProductAtom'
import { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import buyingItemAtom from '../Recoils/buyingItemAtom';
import userLoginAtom from '../Recoils/userLoginAtom';
import {useNavigate} from 'react-router-dom'
const GetProduct = () => {
    const [getProduct, setGetProduct] = useRecoilState(getProductAtom);
    const [buyingItem, setBuyingItem] = useRecoilState(buyingItemAtom);
    const [addingItem,setAddingItem]=useState(null)
    const [userLogin,setUserLogin]=useRecoilState(userLoginAtom)
    
    const [addedToCart,setAddedToCart]=useState(false)
    const navigate=useNavigate()
    

    useEffect(() => {
        // https://food-delivery-mizanur-backend.000webhostapp.com/get-products.php
        // axios.get('https://food-delivery-mizanur-backend.000webhostapp.com/get-products.php')
          axios.get('http://food-delivery.rf.gd/get-products.php')
        // axios.get('http://localhost/projects/foor-delivery/get-products.php')
            .then((response) => {
                console.log(response)
                setGetProduct(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div classNameName='getProduct'>
            
            {
        addedToCart && (
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                Added To Cart Successfully
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
            <div className="productwrapper">
            {
                getProduct && getProduct.map((product) => {
                    return (
                        
                            <div className="card" key={product.id}  >
                                <img src={`https://food-delivery-mizanur-backend.000webhostapp.com/upload/${product.logo}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 className='card-item'>{product.shopname} </h4>
                                    <h5 className='card-item'>{product.title}</h5>
                                    <h3 className='card-item'>&#8377;{product.price}</h3>
                                     <div className="card-item btn-1" onClick={async(e)=>{
                                        setAddingItem(product)
                                        // console.log(product)
                                         if(userLogin===null){
                                         
                                            navigate('/user-login')
                                        }
                                        
                                        const data = {
                                            email: userLogin,
                                            logo: product.logo,
                                            title: product.title,
                                            description: product.description,
                                            price: product.price,
                                            product_id: product.sno
                          
                                          }
                                        //  console.log(data)
                                        try{
                                            const res= await axios.post('http://localhost/projects/foor-delivery/add-to-cart.php',data)
                                        console.log(res)
                                        console.log(res.data.status)
                                          if(res.data.status==='success'){
                                            setAddedToCart(true)
                                            // alert('hi')
                                          }
                                        }
                                        catch(e) {
                                            console.log(e)
                                        }

                                     }}>ADD TO CART</div>
                                     <div className="card-item btn-1">
                                     <Link className='Link-class' to='/buy-now' onClick={(e)=>{
                                        setBuyingItem(product)
                                        console.log(product)

                                     }}>BUY NOW</Link>
                                     </div>
                                </div>
                            </div>
                       

                    )
                })
            }
            </div>
        </div>
    )
}

export default GetProduct