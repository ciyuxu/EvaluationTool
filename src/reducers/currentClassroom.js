import { GET_CLASSROOM } from "../actions/classrooms/getClassroom";

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case GET_CLASSROOM:
      return payload;

    default:
      return state;
  }
};
