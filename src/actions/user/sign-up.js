import API from '../../api'
import loading from '../loading'
import loadError from '../load-error'
import loadSuccess from '../load-success'
import signIn from './sign-in'

const api = new API()

export default (user) => {
  return (dispatch) => {
    const backend = api.service('users')

    dispatch(loading(true))

    backend.create(user)
      .then((result) => {
        dispatch(signIn(user))
      })
      .catch((error) => {
        dispatch(loading(false))
        dispatch(loadError(error))
      })
  }
}
