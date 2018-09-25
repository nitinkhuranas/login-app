import { put, call, apply, all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import firebaseAuth from '../firebaseAuth';

export function* signupUser(action) {
    const { name, email, password } = action;
    try{
        yield put(actions.setSignupMsg(""));
        const response = yield call([firebaseAuth, firebaseAuth.createUserWithEmailAndPassword], email, password);
        yield put(actions.setIsSuccess(true));
    } catch(e){
        yield put(actions.setSignupMsg("Sign up failed"));
    }
}

export default function* signupSaga() {
    yield all([
        yield takeEvery(actionTypes.DO_SIGNUP_USER, signupUser),
    ])
}
