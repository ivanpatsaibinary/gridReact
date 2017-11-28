import React, { Component } from 'react';
import './App.css';
import BoxesContainer from './containers/BoxesContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider className="App">
        <BoxesContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
