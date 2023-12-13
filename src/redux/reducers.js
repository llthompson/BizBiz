import { combineReducers } from 'redux'




const businesses = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_ROW':
            return state.filter((_, index) => index !== action.value);
        default:
            return state;
    }
}




export default combineReducers({ businesses })