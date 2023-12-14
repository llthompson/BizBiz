import React from 'react';
import cookie from 'cookie';
import { Redirect } from 'react-router-dom';

function useLogout() {
    useEffect(() => {
        // Do something
        document.cookie = cookie.serialize('loggedIn', null, { maxAge: 0 });

    }, []);

    return {
        logout: () => {
            // Do something
        }
    };
}

const logout = () => {
    const { logout } = useLogout();
    return <Redirect to='/' />
}

export default logout;