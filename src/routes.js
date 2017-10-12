import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ClassroomsOverview from './components/ClassroomsOverview';
import StudentsOverview from './components/StudentsOverview';
import StudentProfile from './components/student/StudentProfile'
import App from './App';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route path="/classrooms" component={ClassroomsOverview} />
        <Route path="/classroom/:classroomId" component={StudentsOverview} />
        <Route path="/student/:studentId" component={StudentProfile} />
      </div>
    )
  }
}
