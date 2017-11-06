import API from "../../api";
import { history, replace } from "../../store";

const api = new API();

export const STUDENT_REMOVED = "STUDENT_REMOVED";

export default (studentId, classroomId) => {
  return dispatch => {
    console.log("delete");
    api.app
      .authenticate()
      .then(() => {
        const backend = api.service("students");
        backend
          .remove(studentId)
          .then(() => {
            history.replace(`/classroom/${classroomId}`);
          })
          .catch(error => {});
      })
      .catch(error => {
        history.push("/sign-in");
      });
  };
};
