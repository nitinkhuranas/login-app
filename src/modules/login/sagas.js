import { put, call, apply, all, takeEvery } from 'redux-saga/effects';
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

export function* logoutUser(action) {
    try {
        const response = yield call([firebaseAuth, firebaseAuth.signOut]);
        yield put(actions.setIsAuthenticated(false));
    } catch(e) {
        console.log("logout failed")
    }
}

export default function* loginSaga() {
    yield all([
        yield takeEvery(actionTypes.TRIGGER_AUTHORIZE_USER, authorizeUser),
        yield takeEvery(actionTypes.TRIGGER_LOGOUT_USER, logoutUser)
    ])
}
