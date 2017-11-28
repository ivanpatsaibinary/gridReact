import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/RaisedButton';
import WithLayoutProps from './WithLayoutProps';
import Box from '../components/Box';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class LayoutContainer extends Component {

	renderBoxes = () => {
		const { boxesConfig, layouts: { lg } } = this.props;
		let result = [];
		for (let i = 0; i < boxesConfig.length; i++) {
			result.push(<Paper key={ lg[i].i } zDepth={ 2 } rounded={ false }>
				<Box text={ boxesConfig[i].text } id={ lg[i].i } />
			</Paper>);
		}
		return result;
	};

	render () {
		const { boxesDisplayed, handleClick, layoutConfig, layouts } = this.props;
		return (
			<div className='widgets-container'>
				<Button
					label='Add Box'
					primary={ true }
					onClick={ () => handleClick(boxesDisplayed + 1) }
					disabled={ boxesDisplayed === 9 }
				/>
				<Button
					label='Remove Box'
					style={ { margin: 15 } }
					secondary={ true }
					onClick={ () => handleClick(boxesDisplayed - 1) }
					disabled={ boxesDisplayed === 6 }
				/>
				<ResponsiveReactGridLayout
					{ ...layoutConfig }
					layouts={ layouts }
				>
					{ this.renderBoxes() }
				</ResponsiveReactGridLayout>
			</div>
		);
	}
}

export default WithLayoutProps(LayoutContainer);
