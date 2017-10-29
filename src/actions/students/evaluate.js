import API from '../../api'
import { LOAD_ERROR } from '../loading'
import { history } from '../../store'

export const EVALUATION_CREATED = 'EVALUATION_CREATED'

const api = new API()

export default (studentId, student) => {
  return (dispatch) => {
        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            console.log(studentId)

            backend.patch(studentId, student)
              .then((result) => {
                console.log('result', result)
                dispatch({
                  type: EVALUATION_CREATED,
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
