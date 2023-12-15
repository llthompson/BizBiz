// components/Logout.js

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import cookie from 'cookie';
// import { Redirect } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    document.cookie = cookie.serialize('loggedIn', null, { maxAge: 0 });
  }, [dispatch]);

  // No need for the immediate redirect here, it will be handled by the Router

  return null; // or any other UI you might want to render during logout
};

export default Logout;
