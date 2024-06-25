import React from 'react'
import { useRecoilState } from 'recoil'
import userLoginAtom from '../Recoils/userLoginAtom'
import addressAtom from '../Recoils/addressAtom'
import Button from '@mui/material/Button';
import buyingItemAtom from '../Recoils/buyingItemAtom';
import orderPlacedAtom from '../Recoils/orderPlacedAtom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const PaymentCard = () => {
    const [userLogin, setUserLogin] = useRecoilState(userLoginAtom)
    const [useAddress, setUseAddress] = useRecoilState(addressAtom)
    const [buyingItem, setBuyingItem] = useRecoilState(buyingItemAtom)
    const [orderPlacedS, setOrderPlaced] = useRecoilState(orderPlacedAtom)

    const navigate = useNavigate()
    if (userLogin === null) {
        navigate('/user-login')
    }
    if (buyingItem === null) {
        navigate('/')
    }
    const orderPlaced = async (e) => {

        e.preventDefault()
        // window.location.href='/confirm-order'
        console.log(userLogin)
        const t = Date.now();
        console.log(t);
        // console.log(buyingItem)
        const data = {
            order_id: t,
            email: userLogin,
            logo: buyingItem.logo,
            product_id: buyingItem.sno,
            price: buyingItem.price
        }
        // navigate('/confirm-order')
        console.log(data)
        const response = await axios.post('http://localhost/projects/foor-delivery/create-order.php', data)
        console.log(response)
        if (response.data.status === 'success') {
            setOrderPlaced(data)
            navigate('/confirm-order')
        }


    }
    return (
        <div>
            <div className="payment-container">
                <div className="payment-element width" >
                    <div className="payment-items">
                        <div className="payment-item">
                            LOGIN ✓
                        </div>
                        <div className="payment-item">
                            {userLogin}
                        </div>
                    </div>
                    <div className="payment-items">
                        <div className="payment-item">
                            DEVIVERY ADDRESS ✓
                        </div>
                       {useAddress &&(
                         <div className="payment-item">
                         {useAddress.name} , {useAddress.phone} , {useAddress.pin} , {useAddress.locality} , {useAddress.address} , {useAddress.state}
                     </div>
                       )

                       }
                    </div>
                    <div className="payment-items">
                        <div className="payment-item">
                            Payment Options
                        </div>
                        <div className="payment-item">
                            <input type="radio" name="payment" id="payment" onClick={(e) => {
                                alert('Currently  NET BANKING is not available')
                            }} />
                            <label htmlFor="payment">Net Banking</label>

                        </div>
                        <div className="payment-item">
                            <input type="radio" name="payment" id="payment" onClick={(e) => {
                                alert('Currently  UPI is not available')
                            }} />
                            <label htmlFor="payment">UPI</label>

                        </div>
                        <div className="payment-item">
                            <input type="radio" name="payment" id="payment" />
                            
                            <label htmlFor="payment" >Cash on Delivery</label>
                        </div>


                    </div>

                </div>
                <div className="payment-element" style={{
                    minWidth: '190px',
                    marginTop: '20px'
                }}>
                    <div className="price-details">PRICE DETAILS</div>
                    <div className="price-details">Price   &nbsp; &nbsp;  &nbsp;  &nbsp;
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp; {buyingItem.price}</div>
                    <div className="price-details"> Delivery Fee  &nbsp; &nbsp; &nbsp; FREE</div>
                    <div className="price-details">Total    &nbsp; &nbsp;  &nbsp;  &nbsp;
                        &nbsp;  &nbsp;  &nbsp;  &nbsp;&nbsp;&nbsp;  {buyingItem.price}</div>
                </div>



            </div>
            <div>
                <Button variant="contained" color="primary" style={{ 'margin': '15px' }} onClick={orderPlaced} >Confirm Order</Button>
            </div>
        </div>
    )
}

export default PaymentCard