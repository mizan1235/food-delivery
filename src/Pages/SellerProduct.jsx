import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import SellerProductCard from '../Components/SellerProductCard'
import FooterCard from '../Components/FooterCard'
import SellerHeaderCard from '../Components/SellerHeaderCard'

const SellerProduct = () => {
  return (
    <div>
        <SellerHeaderCard/>
        <SellerProductCard/>
        <FooterCard/>
    </div>
  )
}

export default SellerProduct