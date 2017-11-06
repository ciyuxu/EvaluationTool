import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import pickStudent from "../../actions/classrooms/pickStudent";
import RaisedButton from "material-ui/RaisedButton";

class LuckyButton extends PureComponent {
  luckStudent() {
    const { _id, students } = this.props.currentClassroom;
    this.props.pickStudent(_id, students);
  }

  render() {
    return (
      <RaisedButton
        label="LuckyButton"
        primary={true}
        onClick={this.props.onChange}
      />
    );
  }
}

const mapStateToProps = ({ currentClassroom, currentStudent }) => ({
  currentClassroom,
  currentStudent
});

export default connect(mapStateToProps, { pickStudent })(LuckyButton);
