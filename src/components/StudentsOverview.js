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
import AddStudent from './student/AddStudent'

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
      push(`/${studentId}`)
    }
  }

  renderStudent(student, index) {
    return (
      <div>
      <Card style={style.card} className="card">
        <CardMedia overlay={<CardTitle title={student.currentColor} />}>
            <img src={student.photo} alt="" />
        </CardMedia>
        <CardActions>
          <FlatButton label={`Student name: ${student.fullName}`} onClick={this.goToStudent(student._id).bind(this)} />
        </CardActions>
    </Card>
      </div>
    )
  }

  render() {
    return(
    <div className="StudentsOverview">
      <h1>Students Overview</h1>

      <AddStudent />
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

const mapStateToProps = ({ students, currentUser }) => (
  {
    students,
    currentUser,
    // subscribed: subscriptions.includes('classrooms'),
  }
)

export default connect(mapStateToProps, { fetchStudents, subscribeToStudents, push })(StudentsOverview)
