import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import SellerProfileCard from '../Components/SellerProfileCard'
import FooterCard from '../Components/FooterCard'
import SellerHeaderCard from '../Components/SellerHeaderCard'

const SellerProfile = () => {
  return (
    <div>
        <SellerHeaderCard/>
        <SellerProfileCard/>
        <FooterCard/>
    </div>
  )
}

export default SellerProfile