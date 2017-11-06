import { SUBSCRIBED_TO_CLASSROOMS_SERVICE } from "../actions/classrooms/subscribeToClassrooms";
import { SUBSCRIBED_TO_STUDENTS_SERVICE } from "../actions/students/subscribeToStudents";

export default (state = [], { type } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_CLASSROOMS_SERVICE:
      return state.concat("classrooms");

    case SUBSCRIBED_TO_STUDENTS_SERVICE:
      return state.concat("students");

    default:
      return state;
  }
};
