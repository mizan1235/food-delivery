import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const EmployeeLoginCard = () => {
    return (
        <div>
            <div className="reg-emp">
                <div className="reg-emp-item">
                    <TextField id="outlined-basic" label="Email" variant="outlined" type='email' required/>
                </div>
                <div className="reg-emp-item">
                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' required />
                </div>
                <div className="reg-emp-item">
                    <Button variant="contained">Login</Button>
                </div>
                <div className="reg-emp-item">
                    <h4 style={{ color: 'red' }}>Don't have account *</h4>
                </div>
                <div className="reg-emp-item">
                    <Button variant="contained">Create Account</Button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeLoginCard