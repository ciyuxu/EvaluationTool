import { history } from "../../store";
import API from "../../api";
import { LOAD_ERROR } from "../loading";

export const STUDENT_PICKED = "STUDENT_PICKED";

const api = new API();

export default query => {
  return dispatch => {
    const backend = api.service("students");

    api.app
      .authenticate()
      .then(() => {
        backend
          .find()
          .then(result => {
            dispatch({
              type: STUDENT_PICKED,
              payload: result
            });

            const greenStudents = result.data.filter(student => {
              return student.currentColor === "green";
            });
            const yellowStudents = result.data.filter(student => {
              return student.currentColor === "yellow";
            });
            const redStudents = result.data.filter(student => {
              return student.currentColor === "red";
            });

            function pickStudentFromGroup(array) {
              return array[Math.floor(Math.random() * array.length)];
            }

            function pickRandomStudent() {
              var number = Math.floor(Math.random() * 100);
              switch (true) {
                case number < 50:
                  return pickStudentFromGroup(redStudents);
                case number <= 83:
                  return pickStudentFromGroup(yellowStudents);
                case number > 83:
                  return pickStudentFromGroup(greenStudents);
                default:
                  return "Ghost?";
              }
            }

            history.push(`/students/${pickRandomStudent()._id}`);
          })
          .catch(error => {
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            });
          });
      })
      .catch(error => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        });
      });
  };
};
