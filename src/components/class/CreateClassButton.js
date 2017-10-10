import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import createClass from '../../actions/classes/createClass'
import NewIcon from 'material-ui/svg-icons/content/add'

class CreateClassButton extends PureComponent {
  static propTypes = {signedIn: PropTypes.bool}

  render(){
    if (!this.props.signedIn) return null

    return (
      <div className="CreateClassButton">
        <RaisedButton
          label="Create Class"
          primary={true}
          onClick={this.props.createClass}
          icon={<NewIcon />} />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { createClass })(CreateClassButton)
