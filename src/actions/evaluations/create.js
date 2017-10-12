import API from '../../api'

export const STUDENT_EVALUATED = 'STUDENT_EVALUATED'

const api = new API()

export default (evaluationData) => {
  return (dispatch) => {

    const backend = api.service('evaluations')

    api.authenticate()
      .then(() => {
        backend.create(evaluationData)
          .then((results) => {
            console.log(results)
            api.service('students').get(results.studentId)
              .then((result) => {
                dispatch({
                  type: STUDENT_EVALUATED,
                  payload: result
                })
              })
          })
          .catch((error) => {
            console.log(error)
          })
      })

  }
}
