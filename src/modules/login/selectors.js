export const getLogin = (state) => state.login;

export const getIsAuthenticated = (state) => getLogin(state) ? getLogin(state).isAuthenticated : false;

export const getAuthenticationMsg = (state) => getLogin(state) ? getLogin(state).authenticationMsg : "";