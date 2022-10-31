import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/hook';
import { AppState } from '../../services/store';
import { Navigate } from 'react-router-dom';
import { signin } from '../../services/reducers/app';

const Signin = () => {
  const dispatch = useAppDispatch();
  const { isUserLogged } = useAppSelector((state: AppState) => state.app);

  if (isUserLogged) {
    return <Navigate to="/" />;
  }
  const handleSignin = () => {
    console.log("handleSignin");
    dispatch(signin());
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}>

        <h3>SIGN IN TO BIO TESTKIT</h3>
        <div><TextField label="Email" variant="outlined" /></div>
        <div><TextField label="Password" variant="outlined" /></div>
      </Box>
      <div><Button variant="outlined" onClick={handleSignin}> sign in</Button></div>
      <div><Button variant="outlined">
        <Link to='/signup'>
          sign up
        </Link>
      </Button></div>

    </div>
  );
}

export default Signin;