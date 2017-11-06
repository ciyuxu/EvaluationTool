import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import createClassroom from '../../actions/classrooms/createClassroom'
import NewIcon from 'material-ui/svg-icons/content/add'

class ClassroomEditor extends PureComponent {
  constructor (props) {
   super(props)

   this.state = {
     batchNr: '',
     startDate: new Date(),
     endDate: new Date(),
     errors: {} }
 }

  static propTypes = {signedIn: PropTypes.bool}


  updateBatchNr(event) {
    this.setState({
      batchNr: event.target.value
    })
  }

  updateStartDate(event, date) {
    this.setState({
      startDate: date
    })
  }

  updateEndDate(event, date) {
    this.setState({
      endDate: date
    })
  }

  validate(classroom) {
    const { batchNr } = classroom

    let errors = {}
    if (!batchNr || batchNr === '') errors.batchNr = 'Please type in batch number!'

    this.setState({
      errors,
    })
    return Object.keys(errors).length === 0
  }



    saveClassroom() {
       const { batchNr, startDate, endDate } = this.state

       const classroom = { batchNr, startDate, endDate }

       if (this.validate(classroom)) {
         this.props.createClassroom(classroom)
       }
     }

  render(){
    if (!this.props.signedIn) return null
    return (
      <div className="CreateClassroom">
        <TextField
          type="text"
          ref="batchNr"
          className="batchNr"
          hintText="Type batch number here"
          value={this.state.batchNr}
          onChange={this.updateBatchNr.bind(this)}
          />

         <DatePicker
             hintText="Click to select a start date"
             value={this.state.startDate}
             onChange={this.updateStartDate.bind(this)}
           />

           <DatePicker
             hintText="Click to select an end date"
             value={this.state.endDate}
             onChange={this.updateEndDate.bind(this)}
           />

        <RaisedButton
          label="Create Classroom"
          primary={true}
          onClick={this.saveClassroom.bind(this)}
          icon={<NewIcon />} />


      </div>
    )
  }
}
const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})


export default connect(mapStateToProps, { createClassroom } )(ClassroomEditor)
