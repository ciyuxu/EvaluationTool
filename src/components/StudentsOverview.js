import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import fetchStudents from '../actions/students/fetchStudents';
import subscribeToStudents from '../actions/students/subscribeToStudents'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AddStudent from './student/AddStudent';
import deleteAStudent from '../actions/students/deleteAStudent';
import LuckyButton from './classroom/LuckyButton'

const style = {

  card: {

    width: '300px',

    float: 'center',
    margin: '100px',
  },

};



class StudentsOverview extends PureComponent {
  componentWillMount() {
    const { subscribed, fetchStudents, subscribeToStudents } = this.props
    fetchStudents()
    if (!subscribed) subscribeToStudents()
  }

  goToStudent(studentId) {
    const { push } = this.props

    return () => {
      push(`/student/${studentId}`)
    }
  }

  deleteThisStudent(){
      const { currentStudent } = this.props

      this.props.deleteAStudent(currentStudent)
    }


  renderStudent(student, index) {
    return (
      <div key={index}>
        <Card style={style.card} className="card">
          <CardMedia overlay={<CardTitle title={student.currentColor} />}>
              <img src={student.photo} alt="" />
          </CardMedia>
          <CardActions>
            <FlatButton label={`Student name: ${student.fullName}`} onClick={this.goToStudent(student._id).bind(this)} />
          </CardActions>
        </Card>
        <div>
          <RaisedButton
            label="Delete this student"
            primary={true}
            onClick={this.deleteThisStudent.bind(this)}
             />
        </div>
      </div>
    )
  }

  render() {
    return(
    <div className="StudentsOverview">
      <h1>Students Overview</h1>

      <AddStudent />
      <br />
      <LuckyButton />
      <br />
      <br />
      <div>
        <Menu>
          { this.props.students.map(this.renderStudent.bind(this)) }
        </Menu>
      </div>

    </div>
  )
  }
}

const mapStateToProps = ({ currentUser, currentStudent, students, subscriptions }) => {
  const student = students.filter((student) => (student._id === currentStudent))[0]

  return {
    currentUser,
    currentStudent,
    students,
    student,
    subscribed: subscriptions.includes('students'),
  }
}

export default connect(mapStateToProps, { fetchStudents, deleteAStudent, subscribeToStudents, push })(StudentsOverview)
