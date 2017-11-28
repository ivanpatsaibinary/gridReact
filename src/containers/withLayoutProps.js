import React, { Component } from 'react';
import boxesData from '../config/boxesConfig';
import layoutData from './../config/layoutConfig';

export default function withLayoutProps(Component) {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = { aaa: 'adsfa' };
    }

    componentDidMount() {
      console.log('mounted');
    }

    render() {
      console.log(boxesData);
      return <Component
        boxesConfig={boxesData}
        layoutConfig={layoutData}
        hello={'hello'} data={{ ...this.state }}
      />;
    }
  };
}