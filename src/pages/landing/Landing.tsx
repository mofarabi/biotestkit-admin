import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <Stack spacing={1} direction="row" justifyContent="right">
            <Button variant="outlined">
                <Link to='/Signup'>
                    Sign up
                </Link>
            </Button>
            <Button variant="outlined">
                <Link to='/Signin'>
                    Sign in
                </Link>
            </Button>
        </Stack>
    )
}

export default Landing