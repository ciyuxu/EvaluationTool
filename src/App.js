import React, { Component } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
// import Navigation from './components/ui/Navigation'
// import Routes from './routes'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <SignIn />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
