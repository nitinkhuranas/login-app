import * as actionTypes from './actionTypes'

export default function login(state={isAuthenticated:false}, action){
    switch(action.type){
        case actionTypes.SET_IS_SUCCESS:
            state.isSuccess = action.isSuccess;
            return Object.assign({}, state);
        case actionTypes.SET_SIGNUP_MSG:
            state.signupMsg = action.message;
            return Object.assign({}, state);
        default:
            return state;
    }
}