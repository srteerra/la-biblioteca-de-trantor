export const SET_USER = (state, user) => {
  state.user = user;
  state.loggeIn = true;
};
export const SET_ACCESS_TOKEN = (state, token) => {
    state.user.access_token = token.access_token;
};
