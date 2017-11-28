import React, { Component } from 'react';
import './App.css';
import LayoutContainer from './containers/LayoutContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	render () {
		return (
			<MuiThemeProvider className='App'>
				<LayoutContainer />
			</MuiThemeProvider>
		);
	}
}

export default App;
