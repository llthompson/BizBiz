import { combineReducers } from 'redux'


const businesses = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_ROW':
            return state.filter((_, index) => index !== action.value);
        case 'ADD_BUSINESS':
            console.log('should there be a biznss', action)
            const id = Math.max(...state.map(b => b.id)) + 1
            return [...state, { ...action.payload, id }]
        default:
            return state;
    }
}

const initialState = {
    isLoggedIn: false,
    businesses: [],
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLoggedIn: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
            };

        default:
            return state;
    }
};

export default combineReducers({ businesses, auth: authReducer })