import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'

import FlatButton from 'material-ui/FlatButton'

class Navbar extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
    this.goHome()
  }

  signUp() {
    this.props.push('/sign-up')
  }

  goHome() {
    this.props.push('/')
  }

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title="Evaluation Tool"

        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
          <FlatButton label="Sign up" onClick={this.signUp.bind(this)} />

        }

      />
    )
  }
}

  const mapStateToProps = ({ currentUser }) => ({
    signedIn: (!!currentUser && !!currentUser._id)
  })

export default connect(mapStateToProps, { push, signOut })(Navbar)
