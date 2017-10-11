import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import ClassroomsOverview from './components/ClassroomsOverview'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/classrooms" component={ClassroomsOverview} />
      </div>
    )
  }
}
