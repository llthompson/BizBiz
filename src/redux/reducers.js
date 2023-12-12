import { combineReducers } from 'redux'

// const user = (state = null) => state

// const cars = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_CAR':
//             return [...state, action.value]
//         case 'REMOVE_CAR':
//             return [...state.slice(0, action.value), ...state.slice(action.value + 1)];
//         default:
//             return state
//     }
// }


const businesses = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_ROW':
            return state.filter((_, index) => index !== action.value);
        default:
            return state;
    }
}


// const initialState = [];



export default combineReducers({ businesses })