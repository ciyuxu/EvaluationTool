import API from "../../api";
import { history } from "../../store";
import { replace, push } from "react-router-redux";
export const USER_SIGNED_OUT = "USER_SIGNED_OUT";

const api = new API();

export default () => {
  api.signOut().then(() => {
    history.push("/sign-up");
  });

  return { type: USER_SIGNED_OUT };
};
