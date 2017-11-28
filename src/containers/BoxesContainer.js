import React, { Component } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/RaisedButton';
import withLayoutProps from './withLayoutProps';
import boxesData from '../config/boxesConfig';
import layoutData from './../config/layoutConfig';
import Box from '../components/Box';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class BoxesContainer extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // layoutConfig: this.props.layoutConfig,
      // boxesConfig: this.props.boxesConfig.slice(0, 6),
      layouts: {},
      boxesDisplayed: 6
    };
  }

  // static defaultProps = {
  //   layoutConfig: { ...layoutData },
  //   boxesConfig: [...boxesData]
  // };

  componentWillMount() {
    console.log(this.props, this);
    this.getLayouts(this.state.boxesConfig);
  }

  renderBoxes = () => {
    const { boxesDisplayed, boxesConfig, layouts: { lg } } = this.state;
    let result = [];
    for (let i = 0; i < boxesDisplayed; i++) {
      result.push(<Paper key={lg[i].i} zDepth={2} rounded={false}>
        <Box text={boxesConfig[i].text} id={lg[i].i} />
      </Paper>);
    }
    return result;
  };

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

  render() {
    const { boxesDisplayed } = this.state;
    return (
      <div className="widgets-container">
        <Button
          label="Add Box"
          primary={true}
          onClick={this.handleClick.bind(this, boxesDisplayed + 1)}
          disabled={boxesDisplayed === 9}
        />
        <Button
          label="Remove Box"
          style={{ margin: 15 }}
          secondary={true}
          onClick={this.handleClick.bind(this, boxesDisplayed - 1)}
          disabled={boxesDisplayed === 6}
        />
        <ResponsiveReactGridLayout
          {...this.props.layoutConfig}
          layouts={this.state.layouts}
        >
          {this.renderBoxes()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default withLayoutProps(BoxesContainer);
