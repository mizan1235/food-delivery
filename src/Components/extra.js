import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

	const [imageLink, setImageLink] = useState(null);

	const [validationError, setValidationError] = useState(null);

	const fileInputRef = useRef(null);

	const handleFileChange = (event) => {

		const file = event.target.files[0];
		if(file)
		{
			const allowedExtension = ['.jpg', '.png'];
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
    const handleUpload = async(e) => {
        e.preventDefault()
		if(selectedFile)
		{
			const formData = new FormData();
            
			formData.append('file', selectedFile);
            formData.append('name', 'image');
            // console.log(selectedFile)
            // console.log(formData)

			const response = await fetch('http://localhost/Project/Reg-login/upload.php', {
				method : 'POST',
				body : formData
			})
            

			 const responseData = await response.json();
          
             console.log(responseData)
			setImageLink(responseData.image_link);
			fileInputRef.current.value = '';



		}
		else
		{
			setValidationError('Please select a file before uploading.');
		}
	};
  return (
    <div className="container">
            <h1 className="mt-5 mb-5 text-center"><b>Upload File in React.js</b></h1>

            <div className="card">
                <div className="card-header">Upload File in React.js</div>
                <div className="card-body">
                    <form action="">
                    <div className="row">
                        <div className="col col-2"><b>Select File</b></div>
                        <div className="col col-3">
                        	<input type="file" ref={fileInputRef} onChange={handleFileChange} />
                        </div>
                        <div className="col col-3">
                        	<button className="btn btn-primary" onClick={handleUpload} type='submit'>Upload</button>
                        </div>
                    </div>
                    </form>
                    <div className="row">
                        <div className="col col-2">&nbsp;</div>
                        <div className="col col-3">
                            {validationError && (
                            	<p className="text-danger">{validationError}</p>
                            )}

                            {imageLink && (
                            	<div>
                                    <p><b>Uploaded Image : </b></p>
                                    <img src={imageLink} className="img-fluid img-thumbnail" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Upload











