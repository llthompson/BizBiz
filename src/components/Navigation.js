import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions';

const Navigation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout());
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
                    <li className="nav-list-item">
                        {isLoggedIn ? (
                            <button onClick={() => { handleLogout(); history.push('/login'); }}>Logout</button>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;