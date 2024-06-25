// components/Category.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import buyingItemAtom from '../Recoils/buyingItemAtom';
import userLoginAtom from '../Recoils/userLoginAtom';
import { useNavigate } from 'react-router-dom';
const CategoryCard = () => {
  const navigate=useNavigate();
  const [buyingItem, setBuyingItem] = useRecoilState(buyingItemAtom);
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(null);
  const [nodata, setNodata] = useState(false)
  const [addingItem, setAddingItem] = useState(null)
  const [addedToCart,setAddedToCart]=useState(false)
  const [userLogin,setUserLogin]=useRecoilState(userLoginAtom)

  useEffect(() => {
    const fetchProducts = async () => {
      const data = {
        category: categoryName
      }
      //console.log(data)
      try {
        const response = await axios.post(`http://localhost/projects/foor-delivery/search-category-product.php`, data);
        // setProducts(response.data);
        // setLoading(false);
     
        if (response.data.data.length === 0) {
          setNodata(true)
          alert(response.data.data)
        }
        else {
          
          setProducts(response.data.data);
          // setLoading(false);
        }

        console.log(response)
      } catch (err) {
        setError(err);

      }
    };

    fetchProducts();
  }, [categoryName]);


  if (error) return <p style={{
    width: '100%',
    textAlign: 'center',
    height:'80vh',
    paddingTop:'38vh',
   backgroundColor: 'coral'
  }}>Error loading products: {error.message}</p>;
  if (nodata) return <p style={{
    width: '100%',
    textAlign: 'center',
    height:'80vh',
    paddingTop:'38vh',
   backgroundColor: 'coral'
  }}>No {categoryName} available </p>

  return (
    <div>
       {
          products.length===0 && <h2 style={{
            width: '100%',
            textAlign: 'center',
            height:'80vh',
            paddingTop:'38vh',
           backgroundColor: 'coral'
          }}>Error while loading data</h2>
        }
       {
        addedToCart && (
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                Added To Cart Successfully
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        )
      }
      <div className="productwrapper">
        {products && products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={`http://localhost/projects/upload/${product.logo}`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-item">{product.shopname} </h4>
              <h5 className="card-item">{product.title}</h5>
              <h3 className="card-item">&#8377;{product.price}</h3>
              <div className="card-item btn-1" onClick={async (e) => {
                setAddingItem(product)
                // console.log(product)
                if (userLogin === null) {

                  navigate('/user-login')
                }

                const data = {
                  email: userLogin,
                  logo: product.logo,
                  title: product.title,
                  description: product.description,
                  price: product.price,
                  product_id: product.sno

                }
                //  console.log(data)
                try {
                  const res = await axios.post('http://localhost/projects/foor-delivery/add-to-cart.php', data)
                  console.log(res)
                  console.log(res.data.status)
                  if (res.data.status === 'success') {
                    setAddedToCart(true)
                    // alert('hi')
                  }
                }
                catch (e) {
                  console.log(e)
                }

              }}
              >Add To Card</div>
              <div className="card-item btn-1">
                <Link className='Link-class' to='/buy-now' onClick={(e) => {
                  setBuyingItem(product)
                  console.log(product)
                }}>Buy Now</Link></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
