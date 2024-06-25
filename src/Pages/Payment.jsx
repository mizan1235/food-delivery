import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import PaymentCard from '../Components/PaymentCard'
import FooterCard from '../Components/FooterCard'
import UserHeaderCard from '../Components/UserHeaderCard'

const Payment = () => {
  return (
    <div>
        <UserHeaderCard/>
        <PaymentCard/>
        <FooterCard/>
    </div>
  )
}

export default Payment