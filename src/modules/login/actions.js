import * as actionTypes from "./actionTypes";

export function triggerAuthorizeUser(email, password){
    return {
        type: actionTypes.TRIGGER_AUTHORIZE_USER,
        email,
        password,
    };
}

export function triggerSignUpUser(email, password){
    return {
        type: actionTypes.TRIGGER_SIGN_UP_USER,
        email,
        password,
    };
}

export function setIsAuthenticated(isAuthenticated){
    return {
        type: actionTypes.SET_IS_AUTHENTICATED,
        isAuthenticated,
    };
}


export function setAuthenticationMessage(message){
    return {
        type: actionTypes.SET_AUTHENTICATION_MSG,
        message,
    };
}