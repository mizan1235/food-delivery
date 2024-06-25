import React from 'react'
import { useRecoilState } from 'recoil';
import sellerLoginAtom from '../Recoils/sellerLoginAtom';
import editProductAtom from '../Recoils/editProductAtom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const EditProductCard = () => {
  const [sellerLoginDetails, setSellerLoginDetails] = useRecoilState(sellerLoginAtom);
  const [editProduct, setEditProduct] = useRecoilState(editProductAtom);

  const [showEditModal, setShowEditModal] = useState(false);
  const [notes, setNotes] = useState([
    { sno: 1, title: 'Sample Note', description: 'Lorem ipsum dolor sit amet.' }
  ]);
  const navigate = useNavigate();
  if (sellerLoginDetails === null) {
    navigate('/seller-login');
  }
  console.log(editProduct)

  const handleEdit = (e) => {
    e.preventDefault();
    // setEditNote(note);
    setShowEditModal(true);
  };
  const handleSaveChanges = (e) => {
    e.preventDefault();

    setShowEditModal(false);
  };
  return (
    <div>
      <div className="app-container1">
        {/* Edit Modal */}
        {showEditModal && editProduct &&(
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowEditModal(false)}>
                &times;
              </span>
              <h2>Edit this product</h2>
              <form onSubmit={handleSaveChanges}>
                <label>
                  Product Title
                  <input type="text" defaultValue={editProduct.title} onChange={(e) =>
                      console.log(e.target.value)
                    }/>
                </label>
                <label>
                  Product Description
                  <textarea rows="3" defaultValue={editProduct.description} onChange={(e) =>
                      console.log(e.target.value)
                    }   />
                </label>
                <label>
                  Product Price
                  <input type="text" defaultValue={editProduct.price} onChange={(e) =>
                      console.log(e.target.value)
                    } />
                </label>
                
                <button type="submit">Save changes</button>
              </form>
            </div>
          </div>
        )}

        <div className="container1">
          <div>
            <button onClick={handleEdit}>Edit</button>
            {/* <button onClick={() => handleDelete(note.sno)}>Delete</button> */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default EditProductCard