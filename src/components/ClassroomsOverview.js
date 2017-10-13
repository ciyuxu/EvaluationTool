import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import fetchClassrooms from '../actions/classrooms/fetchClassrooms';
import subscribeToClassrooms from '../actions/classrooms/subscribeToClassrooms'
import Paper from 'material-ui/Paper';
import ClassIcon from 'material-ui/svg-icons/action/class'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ClassroomEditor from './classroom/ClassroomEditor'
import LuckyButton from './classroom/LuckyButton'
const style = {
  paper: {
    background: '#f1f9ed',
    width: '800px',

    float: 'center',
    margin: '100px',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '30px',
  },
};



class ClassroomsOverview extends PureComponent {
  componentWillMount() {
    const { subscribed, fetchClassrooms, subscribeToClassrooms } = this.props
    fetchClassrooms()
    if (!subscribed) subscribeToClassrooms()
  }







  goToClassroom(classroomId) {
    const { push } = this.props

    return () => {
      push(`/classroom/${classroomId}`)
    }
  }

  renderClassroom(classroom, index) {
    return (
      <div key={index}>
      <br />
      <MenuItem
        key={index}
        onClick={this.goToClassroom(classroom._id).bind(this)}
        primaryText={`Batch number: ${classroom.batchNr}`} leftIcon={<ClassIcon />}/>
      </div>
    )
  }

  render() {
    return(
    <div className="ClassroomsOverview">
      <h1>Classrooms Overview</h1>

      <ClassroomEditor />
      <br />

      <Paper style={style.paper} className="paper">
        <Menu key="classroomMenu">
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
