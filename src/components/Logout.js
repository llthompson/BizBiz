import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import cookie from 'cookie';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    document.cookie = cookie.serialize('loggedIn', null, { maxAge: 0 });
  }, [dispatch]);

  return null; 
};

export default Logout;
