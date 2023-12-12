import { combineReducers } from 'redux'
// import { DELETE_MAKE } from './actions'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return [...state, action.value]
        case 'REMOVE_CAR':
            return [...state.slice(0, action.value), ...state.slice(action.value + 1)];
        default:
            return state
    }
}

// const makes = (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_MAKES_SUCCESS': return action.value;
//         case 'REMOVE_ROW':
//             console.log('is it in reducers')
//             return [...state.slice(0, action.value), ...state.slice(action.value + 1)];
//         default:
//             return state
//     }
// }

const businesses = (state = null) => {
    return state
}

const initialState = {
    makes: []
};


export default combineReducers({ user, cars, businesses })