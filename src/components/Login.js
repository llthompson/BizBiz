// import logo from './logo.svg';
import '../App.css'
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import Dashboard from './components/Dashboard';
import React from 'react';
import { useState } from 'react';
import Listings from '../containers/Listings';


function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    //LISA CHANGE USE STATE TO FALSE BEFORE SUBMIT

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
     
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
        </Box>
    );
}

export default Login;
