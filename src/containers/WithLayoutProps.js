import React, { Component } from 'react';
import boxesData from '../config/boxesConfig';
import layoutData from './../config/layoutConfig';


export default function WithLayoutProps (Component) {
	return class extends Component {
		constructor (props) {
			super(props);
			this.state = {
				layoutConfig: this.props.layoutConfig,
				boxesConfig: this.props.boxesConfig.slice(0, 6),
				layouts: {},
				boxesDisplayed: 6
			};
		}

		static displayName = `WithLayoutProps(${Component.displayName || Component.name})`;

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

		render () {
			return <Component
				{ ...this.state }
				handleClick={ this.handleClick }
			/>;
		}
	};
}
