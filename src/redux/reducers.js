import { combineReducers } from 'redux'




const businesses = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_ROW':
            return state.filter((_, index) => index !== action.value);
        default:
            return state;
    }
}

const initialState = {
    isLoggedIn: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('reducers: User logged in');
            return {
                ...state,
                isLoggedIn: true,
            };
        case 'LOGOUT':
            console.log('reducers: User logged out');
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default combineReducers({ businesses, auth: authReducer })