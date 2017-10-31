import API from '../../api'
import { LOAD_ERROR } from '../loading'
import { history } from '../../store'

export const ADD_EVALULATION = 'ADD_EVALULATION'


const api = new API()

export default (studentId, student) => {
  return (dispatch) => {
        const backend = api.service('students')

        api.app.authenticate()
          .then(() => {
            console.log(studentId)

            backend.patch(studentId,{ type: ADD_EVALULATION, payload: student })


              .then((student) => {
                  console.log(student)
                dispatch({
                  type: ADD_EVALULATION,
                  payload: student
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
