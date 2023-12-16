//components/Logout.js

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { useHistory } from 'react-router-dom';


const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(logout());
    history.push('/login');
  }, [dispatch]);

  return null;
};

export default Logout;
