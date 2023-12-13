import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useState } from 'react';
import Listings from '../containers/Listings';
import cookie from 'cookie'; 


const Login = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        document.cookie = cookie.serialize('loggedIn', 'true', { maxAge: 60 });
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {isLoggedIn ? (
                <Listings />
            ) : (

                <Stack spacing={2}>
                    <TextField required id="login-un" label="Username" variant="standard" />
                    <TextField required id="login-pw" label="Password" variant="standard" />
                    <Button onClick={handleLogin} variant="contained">Login</Button>
                </Stack>
            )}
        </Box>
    );
}

export default Login;
