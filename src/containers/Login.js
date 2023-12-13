import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginUser } from '../actions'; 

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(loginUser(username, password)),
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
