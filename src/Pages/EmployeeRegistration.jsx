import React from 'react'
import EmployeeREgistrationCard from '../Components/EmployeeREgistrationCard'
import FooterCard from '../Components/FooterCard'
import HeaderCard from '../Components/HeaderCard'

const EmployeeRegistration = () => {
  return (
    <div>
        <HeaderCard/>
        <EmployeeREgistrationCard />
        <FooterCard />
    </div>
  )
}

export default EmployeeRegistration