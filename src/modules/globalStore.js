import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import input from './input/reducer';
import inputSaga from './input/sagas';
import login from './login/reducer';
import loginSaga from './login/sagas';
import signup from './signup/reducer';
import signupSaga from './signup/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers =  combineReducers({
    input,
    login,
    signup,
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(inputSaga);
sagaMiddleware.run(loginSaga);
sagaMiddleware.run(signupSaga);

/*uncomment or debugging*/
window.$store = store;
export default store;
