import API from "../../api";
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from "../loading";

export const STUDENT_CREATED = "STUDENT_CREATED";

const api = new API();

export default newstudent => {
  return dispatch => {
    dispatch({ type: APP_LOADING });

    const backend = api.service("students");

    api
      .authenticate()
      .then(() => {
        backend
          .create(newstudent)
          .then(result => {
            dispatch({ type: APP_DONE_LOADING });
            dispatch({ type: LOAD_SUCCESS });
          })
          .catch(error => {
            dispatch({ type: APP_DONE_LOADING });
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            });
          });
      })
      .catch(error => {
        dispatch({ type: APP_DONE_LOADING });
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        });
      });
  };
};
