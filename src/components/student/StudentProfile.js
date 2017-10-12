import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import fetchStudents from '../../actions/students/fetchStudents'
import subscribeToStudents from '../../actions/students/subscribeToStudents'
import Evaluation from './Evaluation'


class StudentProfile extends PureComponent {
  componentWillMount() {
    this.props.fetchStudents()
    this.props.subscribeToStudents()
  }



  render() {
    const { fullName, photo, _id, currentColor } = this.props

    return(
      <div className="studentProfile">
        <img src={photo} width="200" alt="this"/>
        <h1> {fullName}</h1>
        <h1>{currentColor}</h1>
        <Evaluation />
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { params }) => {
  const student = students[0]
  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchStudents, subscribeToStudents })(StudentProfile)
