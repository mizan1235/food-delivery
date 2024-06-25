import './Home.css'

import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterCard from '../Components/FooterCard'
import EmployeeRegistration from './EmployeeRegistration'
import EmployeeLogin from './EmployeeLogin'
import HeaderCard from '../Components/HeaderCard'
import FoodCategoryCard from '../Components/FoodCategoryCard'
import UserRegistration from './UserRegistration'
import UserLogin from './UserLogin'
import SellerRegistration from './SellerRegistration'
import LivePathCard from '../Components/LivePathCard'
import ProductAdd from './ProductAdd'
import SellerLogin from './SellerLogin'
import Home from './Home'
import Category from './Category'
import UserAccount from './UserAccount'
import Buy from './Buy'
import Payment from './Payment'
import ConfirmOrder from './ConfirmOrder'
import UserOrder from './UserOrder'
import SellerProfile from './SellerProfile'
import SellerProduct from './SellerProduct'
import UserCart from './UserCart'
import Test from '../Components/Test'
import EditProduct from './EditProduct'
const AllPagaes = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/user-registration' element={<UserRegistration />} />
                    <Route path='/user-login' element={<UserLogin />} />

                    {/* <Route path='/path' element={<LivePathCard/>}/> */}

                    <Route path="/category/:categoryName" element={<Category />} />
                    <Route path='/account' element={<UserAccount />} />
                    <Route path='/buy-now' element={<Buy />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='confirm-order' element={<ConfirmOrder />} />
                    <Route path='/my-orders' element={<UserOrder />} />
                    {/* seler pages */}
                    <Route path='/seller-registration' element={<SellerRegistration />} />
                    <Route path='/seller-login' element={<SellerLogin />} />
                    <Route path='/add-product' element={<ProductAdd />} />
                    <Route path='/seller-profile' element={<SellerProfile/>}/>
                    <Route path='/seller-product' element={<SellerProduct />} />
                    <Route path='/edit-product' element={<EditProduct />} />

                    {/* employee pages */}
                    <Route path='/employee-registration' element={<EmployeeRegistration />} />
                    <Route path='/employee-login' element={<EmployeeLogin />} />
                    <Route path='/user-card' element={<UserCart/>}/>
                    <Route path='/test' element={<Test />} />

                </Routes>

            </Router>
        </div>
    )
}

export default AllPagaes