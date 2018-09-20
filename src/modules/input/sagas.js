import { put, call, all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";


export function* fetchRepoData(action) {
    const { owner, repo, base, head } = action;
    const response = yield call(fetch, `https://api.github.com/repos/${owner}/${repo}/compare/${base}...${head}`);
    try {
        const data = yield call([response, response.json]);
        yield put(actions.setSuccess(true));
        yield put(actions.setRepoData(data));
    } catch(e) {
        yield put(actions.setSuccess(false));
    }
}

export function* watchFetchRepoData() {
    yield takeEvery(actionTypes.GET_REPO_DATA, fetchRepoData)
}

export default function* inputSaga() {
    yield all([
        watchFetchRepoData(),
    ])
}
