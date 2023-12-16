import React, { useState, useCookies } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Link as RouterLink } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions';

const Navigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
console.log(isLoggedIn)
    const handleLogout = () => {
        dispatch(logout());
        history.push('/login');
    };

    

    return (
        <AppBar sx={{ bgcolor: 'success.main' }} position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: '1' }}>
                    Small Business App
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {isLoggedIn && (
                        <>
                            <li className="nav-list-item">
                                <Link to="/add" color="inherit">
                                    Add
                                </Link>
                            </li>
                            <li className="nav-list-item">
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </>
                    )}
                    {!isLoggedIn && (
                        <li className="nav-list-item">
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;