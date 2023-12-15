import React, { useEffect } from 'react';
import cookie from 'cookie';
import { Redirect } from 'react-router-dom';

function useLogout() {
    useEffect(() => {
        document.cookie = cookie.serialize('loggedIn', null, { maxAge: 0 });

    }, []);

    return {
        logout: () => {
        }
    };
}

const Logout = () => {
    const { logout } = useLogout();
    logout();
    return <Redirect to='/login' />;
}

export default Logout;