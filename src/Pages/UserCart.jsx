import React from 'react'
import UserHeaderCard from '../Components/UserHeaderCard'
import UserCartCard from '../Components/UserCartCard'
import FooterCard from '../Components/FooterCard'

const UserCart = () => {
  return (
    <div>
        <UserHeaderCard/>
        <UserCartCard/>
        <FooterCard/>
    </div>
  )
}

export default UserCart