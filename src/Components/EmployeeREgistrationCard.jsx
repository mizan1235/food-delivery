import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const EmployeeREgistrationCard = () => {
  return (
    <div>
      <div className="reg-emp">
        <div className="reg-emp-item">
          <TextField id="outlined-basic" label=" Full Name" variant="outlined" />
        </div>
        <div className="reg-emp-item">
          <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required/>
        </div>
        <div className="reg-emp-item">
          <TextField id="outlined-basic" label="Phone" variant="outlined" type='number'  required/>
        </div>
        <div className="reg-emp-item">
          <TextField id="outlined-basic" label="Address" variant="outlined" required />
        </div>
        <div className="reg-emp-item">
          <TextField id="outlined-basic" label="Password" variant="outlined" type='password'  required/>
        </div>
        <div className="reg-emp-item">
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type='password' required/>
        </div>
        <div className="reg-emp-item">
          <Button variant="contained">Sign Up</Button>
        </div>
        <div className="reg-emp-item">
          <h4 style={{ color: 'red' }}>Already signed Up *</h4>
        </div>
        <div className="reg-emp-item">
          <Button variant="contained">Login</Button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeREgistrationCard