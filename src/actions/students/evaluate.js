import API from '../../api'
import { LOAD_ERROR } from '../loading'
import { history } from '../../store'

export const STUDENT_EVALUATED = 'STUDENT_EVALUATED'


const api = new API()

export default (studentId, student) => {
  return (dispatch) => {
        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {

            backend.patch(studentId, student)


              .then((result) => {
                  console.log(result)
                dispatch({
                  type: STUDENT_EVALUATED,
                  payload: result
                })
              })
              .catch((error) => {
                dispatch({
                  type: LOAD_ERROR,
                  payload: error.message
                })
              })
          })
          .catch((error) => {
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      }
    }
