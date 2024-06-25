import React from 'react'
import { useRecoilState } from 'recoil'
import categoryAtom from '../Recoils/categoryAtom'
import { useNavigate } from 'react-router-dom'
const FoodCategoryCard = () => {
    const navigate = useNavigate()
    const [category, setcategory] = useRecoilState(categoryAtom)
    console.log(category)
    const handlebar = () => {
        console.log("Clicked")
    }
    return (
        <div>
            <h3 className='headline'>What's On Your Mind</h3>
            <div className="food-category-container sc-lcIPJg ghBSPf" onClick={handlebar}>

                <div className="food-category-item" onClick={(e) => {
                    setcategory("biryani");
                    navigate(`/category/biryani`)

                }}>
                    <img src="../../foods/biryani.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}> Biryani</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("burger");
                    navigate(`/category/burger`)

                }}>
                    <img src="../../foods/burger.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}> Burger</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("cake");
                    navigate(`/category/cake`)

                }}>
                    <img src="../../foods/cake.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}> Cake</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("dosa");
                    navigate(`/category/dosa`)

                }}>
                    <img src="../../foods/dosa.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}> Dosa</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("momo");
                    navigate(`/category/momo`)

                }}>
                    <img src="../../foods/momo.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}>Momo</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("noodles");
                    navigate(`/category/noodles`)

                }}>
                    <img src="../../foods/noodles.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}>Noodles</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("pizza");
                    navigate(`/category/pizza`)

                }}>
                    <img src="../../foods/pizza.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}>Pizza</h3>
                </div>
                <div className="food-category-item" onClick={(e) => {
                    setcategory("rolls");
                    navigate(`/category/rools`)

                }}>
                    <img src="../../foods/rolls.jpg" alt="Error" />
                    <h3 style={{ textAlign: "center" }}>Rolls</h3>
                </div>

            </div>
        </div>
    )
}

export default FoodCategoryCard