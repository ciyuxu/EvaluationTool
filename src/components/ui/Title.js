// src/components/ui/Title.js
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Title extends PureComponent {
  classNames() {
    const { level } = this.props;
    return `Title level-${level || 1}`;
  }

  render() {
    return <h1 className={this.classNames()}>{this.props.content}</h1>;
  }
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number
};
export default Title;
