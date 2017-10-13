import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import addAStudent from '../../actions/students/addAStudent'
import NewIcon from 'material-ui/svg-icons/content/add'

class AddStudent extends PureComponent {

  constructor(props) {
    super(props)

    this.state ={
      fullName: "",
      photo: "http://www.clker.com/cliparts/3/0/9/a/1358885275951429608Gray%20Avatar.svg.med.png"
    }
  }


updateFullName(event){
  this.setState({
    fullName: event.target.value
  })
}

updatePhoto(event){
  this.setState({
    photo: event.target.value
  })
}

validate(student) {
  const { fullName } = student

  let errors = {}
  if (!fullName || fullName === '') errors.fullName = 'Please type in some name!'

  this.setState({
    errors,
  })
  return Object.keys(errors).length === 0
}

saveStudent() {
  const { fullName, photo } = this.state
  const student = { fullName, photo }

  if (this.validate(student)){
    this.props.addAStudent(student)
  }

}

  render() {
    return (
      <div className="AddAStudent">
        <TextField
          type="text"
          ref="fullName"
          className="fullName"
          hintText="Type student's full name here"
          value={this.state.fullName}
          onChange={this.updateFullName.bind(this)}
          />
          <br />

          <TextField
            type="text"
            ref="photo"
            className="photo"
            hintText="Put student's photo link here"
            value={this.state.photo}
            onChange={this.updatePhoto.bind(this)}
            />

          <br />

          <RaisedButton
            label="Add a Student"
            primary={true}
            onClick={this.saveStudent.bind(this)}
            icon={<NewIcon />} />
        </div>

    )
  }
}
const mapStateToProps = ({ currentUser }) => ({
currentUser})


export default connect(mapStateToProps, { addAStudent } )(AddStudent)
