import React from 'react'
import { useRecoilState } from 'recoil'
import userLoginAtom from '../Recoils/userLoginAtom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const UserOrderCard = () => {
    const [userLogin,setUserLogin]=useRecoilState(userLoginAtom)
    const [myOrders,setMyOrders]=useState(null)
    console.log(userLogin)
    useEffect(() => {
        const fetchOrders = async () => {
            const data={
                email:userLogin
            }
            try {
                const response = await axios.post(`http://localhost/projects/foor-delivery/get-orders.php`,data);
                console.log(response.data.orders)
                if(response.data.orders.length>0){
                    // alert()
                    setMyOrders(response.data.orders)
                }

                 
            } catch (err) {
                console.log(err)
            }
        };
        fetchOrders();
    }, []);
  return (
    <div >
        <div className="order-container ">
            {
                !myOrders && <h2 style={{
                    width: '100%',
                    textAlign: 'center',
                    height:'80vh',
                    paddingTop:'38vh',
                   backgroundColor: 'coral'
                  }}>No Orders found</h2>
            }
            
            {
                myOrders && myOrders.map((order)=>{
                    <h2>My Orders</h2>
                    return(
                        <div className="order-card">
                            <div className="order-card-item">
                                <div className="order-card-item-label">Order Id</div>
                                <div className="order-card-item-value">{order.order_id}</div>
                            </div>
                            <div className="order-card-item">
                                <div className="order-card-item-label">Order Date</div>
                                <div className="order-card-item-value">{order.order_date}</div>
                            </div>
                            
                           
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UserOrderCard