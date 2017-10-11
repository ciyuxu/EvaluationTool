import { FETCHED_CLASSROOMS } from '../actions/classrooms/fetchClassrooms'
import {
  CLASSROOM_CREATED,
  CLASSROOM_UPDATED,
  CLASSROOM_REMOVED
} from '../actions/classrooms/subscribeToClassrooms'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_CLASSROOMS :
      return [ ...payload ]

    case CLASSROOM_CREATED :
      const newclassroom = { ...payload }
      return [newclassroom].concat(state)

    case CLASSROOM_UPDATED :
      return state.map((classroom) => {
        if (classroom._id === payload._id) {
          return { ...payload }
        }
        return classroom
      })

    case CLASSROOM_REMOVED :
        return state.filter((classroom) => (classroom._id !== payload._id))

    default :
      return state

  }
}
