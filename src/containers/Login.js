//containers/Detail.js

import { connect } from 'react-redux';
import Login from '../components/Login';
import { logout, loginSuccess } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginSuccess: () => dispatch(loginSuccess()),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

