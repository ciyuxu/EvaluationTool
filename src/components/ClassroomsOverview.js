import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import fetchClassrooms from '../actions/classrooms/fetchClassrooms';
import subscribeToClassrooms from '../actions/classrooms/subscribeToClassrooms'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ClassroomEditor from './classroom/ClassroomEditor'

class ClassroomsOverview extends PureComponent {
  componentWillMount() {
    const { subscribed, fetchClassrooms, subscribeToClassrooms } = this.props
    fetchClassrooms()
    if (!subscribed) subscribeToClassrooms()
  }







  goToClassroom(classroomId) {
    const { push } = this.props

    return () => {
      push(`/${classroomId}`)
    }
  }

  renderClassroom(classroom, index) {
    return (
      <MenuItem
        key={index}
        onClick={this.goToClassroom(classroom._id).bind(this)}
        primaryText={classroom.batchNr} />
    )
  }

  render() {
    return(
    <div className="ClassroomsOverview">
      <h1>Classrooms Overview</h1>

      <ClassroomEditor />
      <br />
      <br />
      <Paper className="paper">
        <Menu>
          { this.props.classrooms.map(this.renderClassroom.bind(this)) }
        </Menu>
      </Paper>

    </div>
  )
  }
}

const mapStateToProps = ({ classrooms, currentUser }) => (
  {
    classrooms,
    currentUser,
    // subscribed: subscriptions.includes('classrooms'),
  }
)

export default connect(mapStateToProps, { fetchClassrooms, subscribeToClassrooms, push })(ClassroomsOverview)
