import API from '../../api'

export const GET_CLASSROOM = 'GET_CLASSROOM'

const api = new API()

export default (classroomId) => {
  return (dispatch) => {

    const backend = api.service('classrooms')

    api.authenticate()
      .then(() => {
        backend.get(classroomId)
          .then((result) => {
            console.log(result)
            dispatch({
              type: GET_CLASSROOM,
              payload: result
            })
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
