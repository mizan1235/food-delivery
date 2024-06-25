import React from 'react'
import HeaderCard from '../Components/HeaderCard'
import FoodCategoryCard from '../Components/FoodCategoryCard'
import GetProduct from '../Components/GetProduct'
import FooterCard from '../Components/FooterCard'
import { useRecoilState } from 'recoil'
import userLoginAtom from '../Recoils/userLoginAtom'
import UserHeaderCard from '../Components/UserHeaderCard'
const Home = () => {
  const [userLogin,setUserLogin]=useRecoilState(userLoginAtom)
  return (
    <div>
        {userLogin===null?<HeaderCard/>:<UserHeaderCard/>}
        <FoodCategoryCard/>
        <GetProduct/>
        <FooterCard/>
    </div>
  )
}

export default Home