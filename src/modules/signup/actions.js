import * as actionTypes from "./actionTypes";

export function doSignupUser(name, email, password){
    return {
        type: actionTypes.DO_SIGNUP_USER,
        name,
        email,
        password,
    };
}

export function setIsSuccess(isSuccess){
    return {
        type: actionTypes.SET_IS_SUCCESS,
        isSuccess,
    };
}

export function setSignupMsg(message){
    return {
        type: actionTypes.SET_SIGNUP_MSG,
        message,
    };
}