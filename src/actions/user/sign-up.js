import API from "../../api";
import signIn from "./sign-in";

export const USER_SIGNED_UP = "USER_SIGNED_UP";

const api = new API();

export default user => {
  return dispatch => {
    const backend = api.service("users");

    backend
      .create(user)
      .then(result => {
        dispatch(signIn(user));
      })
      .catch(error => {
        dispatch({
          payload: error.message
        });
      });
  };
};
