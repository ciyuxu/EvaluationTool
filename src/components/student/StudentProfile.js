import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../../actions/students/fetchStudents'
import getCurrentStudent from '../../actions/students/getStudent'
import subscribeToStudents from '../../actions/students/subscribeToStudents'
import deleteAStudent from '../../actions/students/deleteAStudent'


class StudentProfile extends PureComponent {
  componentWillMount() {
    const { currentStudent, fetchStudents, getCurrentStudent, subscribeToStudents, subscribed } = this.props
    const { studentId } = this.props.match.params

    if (!currentStudent) fetchStudents()
    getCurrentStudent(studentId)
    if (!subscribed) subscribeToStudents()
  }

  deleteThisStudent(){
      const {  student, currentClassroom } = this.props

      this.props.deleteAStudent(student._id, currentClassroom[0]._id)
    }

  render() {
    const { currentStudent } = this.props
    if (!currentStudent) return null

    return(
      <div className="student profile">
        <img src={currentStudent.photo} width="200" alt="this"/>
        <h1> {currentStudent.fullName}</h1>
        <h1>"hello"</h1>
        <h1>{currentStudent.currentColor}</h1>
        <div className="actions">
          <button className="primary" onClick={this.deleteThisStudent.bind(this)}>Delete</button>
        </div>
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
  subscribeToStudents,
})(StudentProfile)
