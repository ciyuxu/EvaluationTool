import API from "../../api";

export const SUBSCRIBED_TO_CLASSROOMS_SERVICE =
  "SUBSCRIBED_TO_CLASSROOMS_SERVICE";
export const CLASSROOM_CREATED = "CLASSROOM_CREATED";
export const CLASSROOM_UPDATED = "CLASSROOM_UPDATED";
export const CLASSROOM_REMOVED = "CLASSROOM_REMOVED";

const api = new API();
const classrooms = api.service("classrooms");

export default () => {
  return dispatch => {
    classrooms.on("created", classroom => {
      dispatch(createdClassroom(classroom));
    });
    classrooms.on("updated", classroom => {
      dispatch(updatedClassroom(classroom));
    });
    classrooms.on("patched", classroom => {
      dispatch(updatedClassroom(classroom));
    });
    classrooms.on("removed", classroom => {
      dispatch(removedClassroom(classroom));
    });

    dispatch({ type: SUBSCRIBED_TO_CLASSROOMS_SERVICE });
  };
};

const createdClassroom = classroom => {
  return {
    type: CLASSROOM_CREATED,
    payload: classroom
  };
};

const updatedClassroom = classroom => {
  return {
    type: CLASSROOM_UPDATED,
    payload: classroom
  };
};

const removedClassroom = classroom => {
  return {
    type: CLASSROOM_REMOVED,
    payload: classroom
  };
};
