import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUser, logoutUser } from '../actions'; // Import the logoutUser action

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => dispatch(loginUser(username, password)),
    logout: () => dispatch(logoutUser())
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
