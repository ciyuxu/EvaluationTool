import React, { Component } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import muiTheme from "./styles/theme";
import Navbar from "./components/ui/Navbar";
import Routes from "./routes";
import "./App.css";
// import SignIn from './components/SignIn';

class App extends Component {
  getChildContext() {
    return { muiTheme };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.childContextTypes = { muiTheme: PropTypes.object.isRequired };

export default App;
