// src/actions/games/get.js

import API from "../../api";
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from "../loading";

export const GET_STUDENT = "GET_STUDENT";

const api = new API();

export default studentId => {
  return dispatch => {
    dispatch({ type: APP_LOADING });

    const backend = api.service("students");

    api
      .authenticate()
      .then(() => {
        backend
          .get(studentId)
          .then(result => {
            console.log(result);
            dispatch({ type: APP_DONE_LOADING });
            dispatch({ type: LOAD_SUCCESS });

            dispatch({
              type: GET_STUDENT,
              payload: result
            });
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
