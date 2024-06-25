import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useRef} from 'react'
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import sellerLoginAtom from '../Recoils/sellerLoginAtom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ProductAddCard = () => {
  const navigate=useNavigate()
  
  const [sellerLoginDetails, setSellerLoginDetails] = useRecoilState(sellerLoginAtom)



  const [selectedFile, setSelectedFile] = useState(null);

	const [imageLink, setImageLink] = useState(null);

	const [validationError, setValidationError] = useState(null);

	const fileInputRef = useRef(null);
  //console.log(loginDetails,"r")
  useEffect(()=>{
    if(sellerLoginDetails===null){
      // alert("Please login first")
      navigate('/seller-login')
    }
  },[])
  const handleFileChange = (event) => {

		const file = event.target.files[0];
		if(file)
		{
			const allowedExtension = ['.jpg', '.png', '.jpeg', '.gif','.avif','.webp'];
			const selectedFileExtension = file.name.split('.').pop().toLowerCase();
			if(allowedExtension.includes('.' + selectedFileExtension))
			{
				setSelectedFile(file);
				setValidationError(null);
			}
			else
			{
				setSelectedFile(null);
				setValidationError('Invalid file extension. Please select a file with .jpg or .png extension.');
				fileInputRef.current.value = '';
			}
		}

	}; 
     const titleRef=useRef(null)
      const [cate,setcategory]=useState(null)
      const restrurentNameRef=useRef(null)
      const cityRef=useRef(null)
      const pinRef=useRef(null)
      const descriptionRef=useRef(null)
      const priceRef=useRef(null)
      const logoRef=useRef(null)

  const onSubmit=async(e)=>{  
    e.preventDefault();
    const data={
      email:sellerLoginDetails,
      title:titleRef.current.value,
      category:cate,
      restrurentName:restrurentNameRef.current.value,
      city:cityRef.current.value,
      pin:pinRef.current.value,
      description:descriptionRef.current.value,
      price:priceRef.current.value
      // logo:logoRef.current.value
    }
    // console.log(data)
    if(selectedFile)
      {
        const formData = new FormData();
              
       
        formData.append('title', titleRef.current.value);
        formData.append('email', sellerLoginDetails);
        formData.append('category', cate);
        formData.append('shopname', restrurentNameRef.current.value);
        formData.append('city', cityRef.current.value);
        formData.append('pin', pinRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('price', priceRef.current.value);
      
        formData.append('logo', selectedFile);

        console.log(formData)
              // console.log(selectedFile)
              // console.log(formData)
  
        const response = await fetch('http://localhost/projects/foor-delivery/add-product.php', {
          method : 'POST',
          body : formData
        })
              
  
         const responseData = await response.json();
            // if(responseData.data.status==='success'){
               alert('Added Successfully')
            // }
               console.log(responseData)
        // setImageLink(responseData.image_link);
        // fileInputRef.current.value = '';
  
  
  
      }
      else
      {
        setValidationError('Please select a file before uploading.');
      }

  }
   

  return (
    <div className='form-cont-screen-fix'>
      <form action="" onSubmit={onSubmit}>
        <div className="reg-emp">
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="title" variant="outlined" inputRef={titleRef}/>
          </div>
          <div className="reg-emp-item">
            {/* <TextField id="outlined-basic" label="category" variant="outlined"  required /> */}
            <select name="" id="outlined-basic" className='select-cat' onChange={(e)=>{
              console.log(e.target.value)
              setcategory(e.target.value)
            }}>
              <option value="selected" selected>selected</option>
              <option value="biryani" >biryani</option>
              <option value="burger">Burger</option>
              <option value="cake">Cake</option>
              <option value="dosa">Dosa</option>
              <option value="momo">Momo</option>
              <option value="noodles">Noodles</option>
              <option value="pizza">Pizza</option>
              <option value="rolls">Rolls</option>
            </select>
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="Restrurent Name" variant="outlined" type='text' required  inputRef={restrurentNameRef}/>
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="city" variant="outlined" inputRef={cityRef} />
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="PIN" variant="outlined" type='number' required inputRef={pinRef}/>
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="description" variant="outlined" type='text' required inputRef={descriptionRef}/>
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="price" variant="outlined" type='number' required inputRef={priceRef}/>
          </div>
          <div className="reg-emp-item">
            <TextField id="outlined-basic" label="logo" variant="outlined" type='file' required inputRef={logoRef} onChange={handleFileChange} />
          </div>

          <div className="reg-emp-item">
            <Button variant="contained" type='submit'>Add Product</Button>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default ProductAddCard