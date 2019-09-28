import request from "superagent";
import url from "../constants";

export const ERROR = "ERROR";

export const errorMessage = payload => {
  return {
    type: ERROR,
    payload
  };
};

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (name, password, cookie) => dispatch => {
  request
    .post(`${url}/login`)
    .send({ name, password })
    .then(response => {
      cookie.set("userId", response.body.id, { path: "/" });
      cookie.set("user", response.body.jwt, { path: "/" });
      dispatch(jwt(response.body));
    });
};

export const LOG_OUT = "LOG_OUT";

export const logOut = () => dispatch => {
  dispatch({
    type: LOG_OUT
  });
};
