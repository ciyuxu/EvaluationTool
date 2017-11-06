import { GET_STUDENT } from "../actions/students/getStudent";

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case GET_STUDENT:
      return payload;

    default:
      return state;
  }
};
