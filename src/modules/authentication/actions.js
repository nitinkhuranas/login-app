import * as actionTypes from "./actionTypes";

export function triggerAuthorizeUser(email, password){
    return {
        type: actionTypes.TRIGGER_AUTHORIZE_USER,
        email,
        password,
    };
}

export function doSignupUser(name, email, password){
    return {
        type: actionTypes.DO_SIGNUP_USER,
        name,
        email,
        password,
    };
}

export function setSignupMsg(message){
    return {
        type: actionTypes.SET_SIGNUP_MSG,
        message,
    };
}

export function setAuthenticationMessage(message){
    return {
        type: actionTypes.SET_AUTHENTICATION_MSG,
        message,
    };
}

export function triggerLogoutUser(){
    return {
        type: actionTypes.TRIGGER_LOGOUT_USER,
    };
}

export function setUserInfo(userInfo){
    return {
        type: actionTypes.SET_USER_INFO,
        userInfo,
    };
}
