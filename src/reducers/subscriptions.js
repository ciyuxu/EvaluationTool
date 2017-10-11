import { SUBSCRIBED_TO_CLASSROOMS_SERVICE } from '../actions/classrooms/subscribeToClassrooms'

export default (state = [], { type } = {}) => {
  switch (type) {
    case SUBSCRIBED_TO_CLASSROOMS_SERVICE :
      return state.concat('classrooms')

    default :
      return state
  }
}
