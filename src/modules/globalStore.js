import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import input from './input/reducer';
import inputSaga from './input/sagas';
import login from './login/reducer';
import loginSaga from './login/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers =  combineReducers({
    input,
    login,
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(inputSaga);
sagaMiddleware.run(loginSaga);

/*uncomment or debugging*/
window.$store = store;
export default store;
