import * as actionTypes from './actionTypes'

export default function login(state={}, action){
    switch(action.type){
        case actionTypes.SET_USER_INFO:
        console.log("in rediucer = " + (action.userInfo && action.userInfo.displayName));
            state.userInfo = action.userInfo;
            return Object.assign({}, state);
        case actionTypes.SET_SIGNUP_MSG:
            state.signupMsg = action.message;
            return Object.assign({}, state);
        case actionTypes.SET_AUTHENTICATION_MSG:
            state.authenticationMsg = action.message;
            return Object.assign({}, state);
        default:
            return state;
    }
}