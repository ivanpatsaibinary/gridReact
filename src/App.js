import React, { Component } from 'react';
import './App.css';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);


class App extends Component {
  render() {
    const layouts = {
      lg: [
        { i: '1', x: 0, y: 0, w: 1, h: 2, static: true },
        { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 5, maxW: 10 },
        { i: '3', x: 4, y: 0, w: 1, h: 2 }
      ],
      md: [
        { i: '1', x: 0, y: 0, w: 1, h: 2, static: true },
        { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 4, maxW: 8 },
        { i: '3', x: 4, y: 0, w: 1, h: 2 }
      ],
      sm: [
        { i: '1', x: 0, y: 0, w: 1, h: 2, static: true },
        { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 5 },
        { i: '3', x: 4, y: 0, w: 1, h: 2 }
      ],
      xs: [
        { i: '1', x: 0, y: 0, w: 1, h: 2, static: false },
        { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: '3', x: 4, y: 0, w: 1, h: 2 }
      ],
      xxs: [
        { i: '1', x: 0, y: 0, w: 1, h: 2, static: false },
        { i: '2', x: 1, y: 0, w: 3, h: 2, minW: 1, maxW: 2 },
        { i: '3', x: 4, y: 0, w: 1, h: 2 }
      ]
    };
    return (
      <div className="App">
        <h1>Grid</h1>
        <ResponsiveReactGridLayout
          className="layout" layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          <div key="1"><h1>Item 1</h1></div>
          <div key="2"><h1>Item 2</h1></div>
          <div key="3"><h1>Item 3</h1></div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default App;
