import React from 'react'
import { useRecoilState } from 'recoil'
import sellerLoginAtom from '../Recoils/sellerLoginAtom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import editProductAtom from '../Recoils/editProductAtom'
import { useRef } from 'react';
import sellerProductAtom from '../Recoils/sellerProductAtom'
const SellerProductCard = () => {
  const [sellerLoginDetails, setSellerLoginDetails] = useRecoilState(sellerLoginAtom)
  const [sellerDetails, setSellerDetails] = useState(null)
  const [sellerProducts, setSellerProducts] = useRecoilState(sellerProductAtom)
  const [editProduct, setEditProduct] = useRecoilState(editProductAtom)
  const [showEditModal, setShowEditModal] = useState(false);
  const [removeProduct, setRemoveProduct] = useState(null)

  //editing the product
  const titleRef = useRef()
  const descriptionRef = useRef()
  const priceRef = useRef()

  const navigate = useNavigate()
  useEffect(() => {
    const fetchDetails = async () => {
      const data = {
        email: sellerLoginDetails
      }
      //console.log(data)
      try {
        const response = await axios.post(`http://localhost/projects/foor-delivery/get-products-seller.php`, data);

        console.log(response)
        setSellerProducts(response.data.data)

      } catch (err) {
        console.log(err)

      }
    };

    fetchDetails();
  }, []);

  if (sellerLoginDetails === null) {
    navigate('/seller-login');
  }
  // console.log(editProduct)

  const handleEdit = (e) => {
    e.preventDefault();
    // setEditNote(note);

    setShowEditModal(true);
  };
  const handleSaveChanges = async(e) => {
    e.preventDefault();
     const data = {
      sno:editProduct.sno,
      email:sellerLoginDetails,
      title:titleRef.current.value,
      description:descriptionRef.current.value,
      price:priceRef.current.value
    }
    console.log(data)
    await axios.put('http://localhost/projects/foor-delivery/update-product.php',data)
      .then((response) => {
        alert('Product Updated Successfully,Refresh the page to see the changes')
        console.log(response)
      }).catch((err) => {
        console.log(err)
      
      } 
    )
    setShowEditModal(false);
  };
  const handleDelete = async(e) => {
    e.preventDefault();
    const data = {
      sno:removeProduct.sno,
      email:sellerLoginDetails
    }
    console.log(data)
    await axios.delete('http://localhost/projects/foor-delivery/delete-product.php',data)
      .then((response) => {
        // alert('Product Deleted Successfully,Refresh the page to see the changes')
        console.log(response)
      }).catch((err) => {
        console.log(err)
      
      } 
    )
  }
  return (
    <div classNameName='getProduct'>

      <div className="productwrapper">
        {
          sellerProducts && sellerProducts.map((product) => {
            return (

              <div className="card" key={product.id}  >
                <img src={`http://localhost/projects/upload/${product.logo}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className='card-item'>{product.shopname} </h4>
                  <h5 className='card-item'>{product.title}</h5>
                  <h3 className='card-item'>&#8377;{product.price}</h3>
                  <div className="container1">
                      <div className='cont1-item'>
                        <button onClick={(e)=>{
                          e.preventDefault()
                          setEditProduct(product)
                          handleEdit(e)
                        
                        }}>Edit</button>
                        
                      </div>
                      <div className='cont1-item'>
                        <button onClick={(e)=>{
                          e.preventDefault()
                          setRemoveProduct(product)
                          handleDelete(e)
                        
                        }}>Delete</button>
                        
                      </div>
                    </div>
                   

                    


                </div>
              </div>


            )
          })
        }
      </div>
      <div className="app-container1">
        {/* Edit Modal */}
        {showEditModal && editProduct && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowEditModal(false)}>
                &times;
              </span>
              <h2>Edit this product</h2>
              <form onSubmit={handleSaveChanges}>
                <label>
                  Product Title
                  <input type="text" defaultValue={editProduct.title} ref={titleRef}/>
                </label>
                <label>
                  Product Description
                  <textarea rows="3" defaultValue={editProduct.description} ref={descriptionRef}/>
                </label>
                <label>
                  Product Price
                  <input type="text" defaultValue={editProduct.price} ref={priceRef} />
                </label>

                <button type="submit">Save changes</button>
              </form>
            </div>
          </div>
        )}

        
      </div>

    </div>
  )
}

export default SellerProductCard