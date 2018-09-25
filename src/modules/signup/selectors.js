export const getSignup= (state) => state.signup;

export const getIsSuccess = (state) => getSignup(state) ? getSignup(state).isSuccess : false;

export const getSignupMsg = (state) => getSignup(state) ? getSignup(state).signupMsg : "";