import React from 'react'
import {
    AppBar, Toolbar, IconButton,
    Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

const Navigation = ({ logout }) => {
    const handleLogout = () => {
        logout();
    };
    const isLoggedIn = cookie.parse(document.cookie)['loggedIn'];
    return (
        <AppBar sx={{ bgcolor: 'success.main' }} position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Small Business App
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        {isLoggedIn ? (
                            <Link to='/logout'>Logout</Link>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation