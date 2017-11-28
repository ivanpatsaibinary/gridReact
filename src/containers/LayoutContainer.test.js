import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LayoutContainer from './LayoutContainer';

Enzyme.configure({adapter: new Adapter()});

describe('LayoutContainer', () => {
  let layout;
  beforeEach(() => {
    layout = Enzyme.shallow(<LayoutContainer/>);
  });

  it('should render the component', () => {
    expect(layout.length).toEqual(1);
  })
});
