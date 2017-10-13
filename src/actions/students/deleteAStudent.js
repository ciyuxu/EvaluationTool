import API from '../../api'
import { LOAD_ERROR } from '../loading'
import { history } from '../../store'

export const STUDENT_DELETED = 'STUDENT_DELETED'

const api = new API()

export default (studentId) => {
  return (dispatch) => {

        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            backend.remove(studentId)
              .then((result) => {
                console.log(result)
                dispatch({
                  type: STUDENT_DELETED,
                  payload: result
                })
                history.push('/classrooms')
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
