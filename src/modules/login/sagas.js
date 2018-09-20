import { put, call, all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import firebaseAuth from '../firebaseAuth';

export function* authorizeUser(action) {
    const { email, password } = action;
    try {
        yield put(actions.setAuthenticationMessage(""));
        const response = yield call([firebaseAuth, firebaseAuth.signInWithEmailAndPassword], email, password );
        yield put(actions.setIsAuthenticated(true));
    } catch(e){
        yield put(actions.setAuthenticationMessage("Username or password incorrect"));
    }
}


export function* signUpUser(action) {
    const { email, password } = action;
    try{
        yield put(actions.setAuthenticationMessage(""));
        const response = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], email, password);
    } catch(e){
        yield put(actions.setAuthenticationMessage("Sign up failed"));
    }
}

export function* watchAuthorizeUser() {
    yield takeEvery(actionTypes.TRIGGER_AUTHORIZE_USER, authorizeUser)
}

export function* watchSignUpUser() {
    yield takeEvery(actionTypes.TRIGGER_SIGN_UP_USER, signUpUser)
}

export default function* loginSaga() {
    yield all([
        watchAuthorizeUser(),
        watchSignUpUser(),
    ])
}
