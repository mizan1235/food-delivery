import React from 'react'
import { useRecoilState } from 'recoil'
import userLoginAtom from '../Recoils/userLoginAtom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import buyingItemAtom from '../Recoils/buyingItemAtom'
const UserCartCard = () => {
  const [userLogin, setUserLogin] = useRecoilState(userLoginAtom)
  const [cartData, setCartData] = useState(null)
  const [buyingItem, setBuyingItem] = useRecoilState(buyingItemAtom);

  let total = 0
  useEffect(() => {
    //console.log(userLogin);
    const data = {
      email: userLogin
    }
    async function fetchData() {
      await axios.post('http://localhost/projects/foor-delivery/get-cart.php', data)
        .then((response) => {
          console.log(response)
          if(response.data.data.length>0){
            // alert()
            setCartData(response.data.data)
        }
          // setCartData(response.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchData()
    console.log(cartData)


  }, [])
  return (
    <div>
      <div className="user-cart-container ">
        {
          !cartData && <h2 style={{
            width: '100%',
            textAlign: 'center',
            height:'80vh',
            paddingTop:'38vh',
           backgroundColor: 'coral'
          }}>No Items in Cart</h2>
        }

        <div className="user-cart-element">
          {cartData && cartData.map((data) => {
            return (
              < div className='cart-cart'>
                <div className="user-cart-items">
                  <div className="imageCard">
                    <img src={"http://localhost/projects/upload/" + data.logo} alt="" />
                  </div>
                  <div className="cart-title">{data.title}</div>


                </div>
                <div className="cart-links">
                  <div className=" btn-cart">
                    <Link className='Link-class' to='/buy-now' onClick={(e) => {
                     

                    }}>BUY NOW</Link>
                  </div>
                  <div className=" btn-cart">
                    < div className='Link-class' onClick={async (e) => {
                      // console.log(data)
                      const isConfirmed = window.confirm('Are you sure you want to remove this item?');
                      if (isConfirmed) {
                        const Data = {
                          email: userLogin,
                          sno: data.sno
                        };

                        try {
                          const res = await axios.delete('http://localhost/projects/foor-delivery/remove-card.php', {
                            data: Data
                          });
                          console.log(res);
                          alert('Item removed successfully, please refresh the page to see the changes.');
                        } catch (e) {
                          console.log(e);
                        }
                      }
                    }}>REMOVE</div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>

        <div className="user-cart-element " style={{ maxWidth: '300px', minWidth: '290px' }}>
          {
            cartData && (
              <div className="items-cart-price">

                <div className="price-details">Price( {cartData.length} items)   &nbsp; &nbsp;  &nbsp;  &nbsp;
                  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp; {cartData.map((data) => {
                    total += parseInt(data.price)
                  })} {total} </div>
                <div className="price-details"> Delivery Fee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; FREE</div>
                <div className="price-details"> Discount   &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  0</div>

                <div className="price-details">Total    &nbsp; &nbsp;  &nbsp;  &nbsp;
                  &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  {total} </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default UserCartCard