import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}>

        <h3>SIGN UP TO BIO TEST KIT</h3>
        <div><TextField label="Email" variant="outlined" /></div>
        <div><TextField label="Enter your Name" variant="outlined" /></div>
        <div><TextField label="Add a password" variant="outlined" /></div>
      </Box>
      <div><Button variant="outlined"> SIGN UP</Button></div>
      <div>
        <Button variant="outlined">
          <Link to='/Signin'>
            SIGN IN
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Signup