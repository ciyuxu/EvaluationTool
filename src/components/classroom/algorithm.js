import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

const pick = Math.random() * 100;

class FreshPick extends PureComponent {
  render() {
    if (pick < 50)
      return <h1> "RED" </h1>
    else if (pick < 83)
      return <h1> "YELLOW" </h1>
    else {
      return <h1> "GREEN" </h1>
      }
  }
}
export default FreshPick;
