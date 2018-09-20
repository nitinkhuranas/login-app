export const getInput = (state) => state.input || {}

export const getCommitHistory = (state) => getInput(state).commitHistory || {};

export const getCommits = (state) =>  getCommitHistory(state).commits || [];

export const getIsSuccess = (state) => getInput(state).isSuccess || false;