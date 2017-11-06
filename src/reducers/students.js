import { FETCHED_STUDENTS } from "../actions/students/fetchStudents";
import {
  STUDENT_CREATED,
  STUDENT_UPDATED,
  STUDENT_REMOVED
} from "../actions/students/subscribeToStudents";

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS:
      return [...payload];

    case STUDENT_CREATED:
      const newstudent = { ...payload };
      return [newstudent].concat(state);

    case STUDENT_UPDATED:
      return state.map(student => {
        if (student._id === payload._id) {
          return { ...payload };
        }
        return student;
      });

    case STUDENT_REMOVED:
      return state.filter(student => student._id !== payload._id);

    default:
      return state;
  }
};
