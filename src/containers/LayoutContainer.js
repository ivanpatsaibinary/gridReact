import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/RaisedButton';
import Box from '../components/Box';
import boxesData from '../config/boxesConfig';
import layoutData from '../config/layoutConfig';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class LayoutContainer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			layoutConfig: this.props.layoutConfig,
			boxesConfig: this.props.boxesConfig.slice(0, 6),
			layouts: {},
			boxesDisplayed: 6
		};
	}

	static defaultProps = {
		layoutConfig: { ...layoutData },
		boxesConfig: [...boxesData]
	};

	componentWillMount () {
		this.getLayouts(this.state.boxesConfig);
	}

	getLayouts = (data) => {
		const result = { lg: [], md: [], sm: [], xs: [] };
		data.forEach(({ layout, id }) => {
			for (let key in layout) {
				if (layout.hasOwnProperty(key)) {
					result[key] = [...result[key], { ...layout[key], i: id.toString() }];
				}
			}
		});
		this.setState({ layouts: result });
	};

	handleClick = (updatedBoxesDisplayed) => {
		this.getLayouts(this.props.boxesConfig.slice(0, updatedBoxesDisplayed));
		this.setState({
			boxesConfig: this.props.boxesConfig.slice(0, updatedBoxesDisplayed),
			boxesDisplayed: updatedBoxesDisplayed
		});
	};

	renderBoxes = () => {
		const { boxesConfig, layouts: { lg } } = this.state;
		let result = [];
		for (let i = 0; i < boxesConfig.length; i++) {
			result.push(<Paper key={ lg[i].i } zDepth={ 2 } rounded={ false }>
				<Box text={ boxesConfig[i].text } id={ lg[i].i } />
			</Paper>);
		}
		return result;
	};

	render () {
		const { boxesDisplayed, layoutConfig, layouts } = this.state;
		return (
			<div className='layout-container'>
				<Button
					label='Add Box'
					primary={ true }
					onClick={ this.handleClick.bind(this, boxesDisplayed + 1) }
					disabled={ boxesDisplayed === 9 }
				/>
				<Button
					label='Remove Box'
					style={ { margin: 15 } }
					secondary={ true }
					onClick={ this.handleClick.bind(this, boxesDisplayed - 1) }
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

export default LayoutContainer;
