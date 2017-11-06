import React, { Component } from "react";
import { Route } from "react-router-dom";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import ClassroomsOverview from "./components/ClassroomsOverview";
import StudentsOverview from "./components/StudentsOverview";
import StudentProfile from "./components/student/StudentProfile";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/classrooms" component={ClassroomsOverview} />
        <Route path="/classroom/:classroomId" component={StudentsOverview} />
        <Route path="/student/:studentId" component={StudentProfile} />
      </div>
    );
  }
}
