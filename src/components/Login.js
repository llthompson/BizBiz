import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal'; 
import Listings from '../containers/Listings';
import cookie from 'cookie';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === '' || password === '') {
            setError('Oops! Please enter a username and a password.');
        } else {
            setIsLoggedIn(true);
            document.cookie = cookie.serialize('loggedIn', 'true', { maxAge: 60 });
        }
    };

    const handleCloseModal = () => {
        setError('');
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
                <Listings isLoggedIn={isLoggedIn} />
            ) : (
                <Stack spacing={2}>
                    <TextField
                        required
                        id="login-un"
                        label="Username"
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        id="login-pw"
                        label="Password"
                        variant="standard"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleLogin} variant="contained">
                        Login
                    </Button>

                    <Modal
                        open={Boolean(error)}
                        onClose={handleCloseModal}
                        aria-labelledby="error-modal-title"
                        aria-describedby="error-modal-description"
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}
                        >
                            <h2 id="error-modal-title">Error</h2>
                            <p id="error-modal-description">{error}</p>
                        </Box>
                    </Modal>
                </Stack>
            )}
        </Box>
    );
};

export default Login;
