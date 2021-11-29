export const SET_USER = (state, user) => {
  state.user = user;
  state.loggeIn = true;
};
export const SET_ACCESS_TOKEN = (state, tokens) => {
    state.user.access_token = tokens.access_token;
    state.user.refresh_token = tokens.refresh_token;
};

export const LOGOUT_USER = (state, user) => {
  state.user = [];
  state.loggeIn = false;
};

export const SET_ACCESS = (state, access) => {
  state.access = access;
 
};