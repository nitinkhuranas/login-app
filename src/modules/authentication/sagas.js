import { put, call, apply, all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import firebaseAuth from './firebaseAuth';

export function* authorizeUser(action) {
    const { email, password } = action;
    try {
        yield put(actions.setAuthenticationMessage(""));
        const response = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], email, password );
    } catch(e){
        yield put(actions.setAuthenticationMessage("Username or password incorrect"));
    }
}

export function* signupUser(action) {
    const { name, email, password } = action;
    try{
        yield put(actions.setSignupMsg(""));
        const response = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], email, password);
        const { user } = response;
        yield call([user, user.updateProfile] , { displayName: name});
    } catch(e){
        yield put(actions.setSignupMsg("Sign up failed"));
    }
}

export function* logoutUser() {
    try {
        yield call([firebaseAuth, firebaseAuth.signOut]);
    } catch(e) {
        console.log("logout failed")
    }
}

export default function* authenticationSaga() {
    yield all([
        yield takeEvery(actionTypes.TRIGGER_AUTHORIZE_USER, authorizeUser),
        yield takeEvery(actionTypes.TRIGGER_LOGOUT_USER, logoutUser),
        yield takeEvery(actionTypes.DO_SIGNUP_USER, signupUser),
    ])
}
