import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import inputReducer from './input/reducer';
import inputSaga from './input/sagas';
import authenticationSaga from './authentication/sagas';
import authenticationReducer from './authentication/reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers =  combineReducers({
    input: inputReducer,
    authentication: authenticationReducer
})

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(inputSaga);
sagaMiddleware.run(authenticationSaga);

/*uncomment or debugging*/
window.$store = store;
export default store;
