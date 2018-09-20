import * as actionTypes from "./actionTypes";

export function getRepoData(owner, repo, base, head){
    return {
        type: actionTypes.GET_REPO_DATA,
        owner,
        repo,
        base, 
        head,
    };
}

export function setRepoData(data){
    return {
        type: actionTypes.SET_REPO_DATA,
        data,
    };
}

export function setSuccess(data){
    return {
        type: actionTypes.SET_SUCCESS,
        data,
    };
}