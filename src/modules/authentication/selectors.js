export const getAuthentication= (state) => state.authentication;

export const getUserInfo = (state) => getAuthentication(state) ? getAuthentication(state).userInfo : null;

export const getUserName = (state) => getUserInfo(state) ? getUserInfo(state).displayName : "";

export const getIsAuthenticated = (state) => getUserInfo(state) ? true : false;

export const getSignupMsg = (state) => getAuthentication(state) ? getAuthentication(state).signupMsg : "";

export const getAuthenticationMsg = (state) => getAuthentication(state) ? getAuthentication(state).authenticationMsg : "";