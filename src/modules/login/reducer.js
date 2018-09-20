import * as actionTypes from './actionTypes'

export default function login(state={isAuthenticated:false}, action){
    switch(action.type){
        case actionTypes.SET_IS_AUTHENTICATED:
            state.isAuthenticated = action.isAuthenticated;
            return Object.assign({}, state);
        case actionTypes.SET_AUTHENTICATION_MSG:
            state.authenticationMsg = action.message;
            return Object.assign({}, state);
        default:
            return state;
    }
}