import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CreateClassButton from './class/CreateClassButton'

class ClassesOverview extends PureComponent {
  render() {
    return(
    <div className="ClassesOverview">
      <h1>Classes Overview</h1>

      <CreateClassButton />
    </div>
  )
  }
}

export default ClassesOverview;
