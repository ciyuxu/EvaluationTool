import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../../actions/students/fetchStudents'
import getCurrentStudent from '../../actions/students/getStudent'
import subscribeToStudents from '../../actions/students/subscribeToStudents'
import deleteAStudent from '../../actions/students/deleteAStudent'
import RaisedButton from 'material-ui/RaisedButton'
import EvaluationForm from './EvaluationForm'


class StudentProfile extends PureComponent {
  componentWillMount() {
    const { currentStudent, fetchStudents, getCurrentStudent, subscribeToStudents, subscribed } = this.props
    const { studentId } = this.props.match.params

    if (!currentStudent) fetchStudents()
    getCurrentStudent(studentId)
    if (!subscribed) subscribeToStudents()
  }

  deleteThisStudent(){
      const { studentId } = this.props.match.params


      this.props.deleteAStudent(studentId)
        }

  render() {
    const { currentStudent } = this.props
    if (!currentStudent) return null

    return(
      <div className="student profile">
        <img src={currentStudent.photo} width="200" alt="this"/>
        <h1>"I like to be evaluated!"</h1>
        <h2> {`Name: ${currentStudent.fullName}`}</h2>
        <h2>{`Color: ${currentStudent.currentColor}`}</h2>
        <h2>{`Remark: ${currentStudent.remark}`}</h2>
        <div>
          <RaisedButton
            label="Delete this student"
            primary={true}
            onClick={this.deleteThisStudent.bind(this)}
             />
        </div>
      <EvaluationForm />
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, currentStudent, student, currentClassroom, subscriptions }) => {


  return {
    currentUser,
    currentStudent,
    student,
    currentClassroom,
    subscribed: subscriptions.includes('students'),
  }
}


export default connect(mapStateToProps, {
  getCurrentStudent,
  fetchStudents,
  deleteAStudent,
  subscribeToStudents,
})(StudentProfile)
