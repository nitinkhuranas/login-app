import * as actionTypes from './actionTypes'

export default function input(state={isSuccess:true}, action){
    switch(action.type){
        case actionTypes.SET_REPO_DATA:
            const {base, head} = action;
            state.commitHistory = action.data;
            return Object.assign({}, state);
        case actionTypes.SET_SUCCESS:
            state.isSuccess = action.data;
            return Object.assign({}, state);
        default:
            return state;
    }
}