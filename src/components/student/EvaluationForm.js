import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import evaluateStudent from '../../actions/students/evaluate'

class EvaluationForm extends PureComponent {
  constructor (props) {
   super(props)

   this.state = {
     evaluationDate: new Date(),
     currentColor: "grey",
     remark: '',
      }
  }
  handleChange = (event, index, currentColor) => this.setState({currentColor});




  updateEvaluationDate(event, date) {
    this.setState({
      evaluationDate: date
    })
  }

  updateRemark(event) {
    this.setState({
      remark: event.target.value
    })
  }

  saveEvaluation() {
    const { evaluationDate, currentColor, remark } = this.state
    const student = { evaluationDate, currentColor, remark }

    const  studentId  = this.props.currentStudent._id

    this.props.evaluateStudent(studentId, student)

  }



  render() {

    return (
      <div className="evaluation">
        <h2>Evaluation Options</h2>
        <form id="evaluationForm">

        <DatePicker
            hintText="Click to select a evaluation date"
            value={this.state.evaluationDate}
            onChange={this.updateEvaluationDate.bind(this)}
          />


          <SelectField
            value={this.state.currentColor}
            onChange={this.handleChange}
            ref="color"
          >
            <MenuItem value={"green"} primaryText="Green" />
            <MenuItem value={"yellow"} primaryText="Yellow" />
            <MenuItem value={"red"} primaryText="Red" />
          </SelectField>

          <br />
          <TextField
            type="text"
            ref="remark"
            className="remark"
            hintText="Type your remark here"
            value={this.state.remark}
            onChange={this.updateRemark.bind(this)}
            />
          <br />
          <RaisedButton
            label="Save"
            primary={true}
            onClick={this.saveEvaluation.bind(this)}
             />

        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentStudent, currentUser, student }) => ({ currentStudent, currentUser, student })

export default connect(mapStateToProps, { evaluateStudent })(EvaluationForm)
