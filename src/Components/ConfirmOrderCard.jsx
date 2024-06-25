import React from 'react'
import { useRecoilState } from 'recoil'
import orderPlacedAtom from '../Recoils/orderPlacedAtom'
import { Link } from 'react-router-dom'

const ConfirmOrderCard = () => {
    const [orderPlacedS, setOrderPlaced] = useRecoilState(orderPlacedAtom)
   
    // Outputs the current Unix timestamp in milliseconds
    

  return (
    <div className="order-placed-success">
    <h2>Order Placed Successfully!</h2>
    <p>Thank you for shopping with us. Your order has been successfully placed.</p>
    
    {/* <div className="confirm-order-details"> */}
      <h3>Order Details</h3>
      {/* Display relevant order details such as order number, items, total amount, etc. */}
      {/* Replace the placeholders with actual data from your application */}
      {/* <p>Order Id: <span>{ordeSummeryData?.id}</span></p> */}
      {/* <p>Total Amount: <span>&#8377;{detailedProduct?.price}</span></p> */}
      {/* Add more details as needed */}
    {/* </div> */}
    {
        orderPlacedS && (
            <div className="order-details">
                <p>Order Id: <span>{orderPlacedS.order_id}</span></p>
                <p>Total Amount: <span>{orderPlacedS.price}</span></p>
                
            </div>
        )
    }

    <div className="continue-shopping">
      <p>Continue shopping for more amazing products.</p>
      <Link to="/">Shop Now</Link>
    </div>

    <div className="social-share">
      <p>Share your purchase with friends</p>
      {/* Add social media sharing buttons/icons */}
      {/* You can use third-party libraries for social media sharing functionality */}
    </div>
  </div>
  )
}

export default ConfirmOrderCard