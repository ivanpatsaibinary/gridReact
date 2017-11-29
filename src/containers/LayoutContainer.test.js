import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LayoutContainer from './LayoutContainer';
import layoutData from './../config/layoutConfig';
import boxesData from './../config/boxesConfig';

Enzyme.configure({ adapter: new Adapter() });

describe('LayoutContainer', () => {
  let layout;
  beforeEach(() => {
    layout = Enzyme.shallow(<LayoutContainer
      boxesConfig={ boxesData }
      layoutConfig={ layoutData }
    />);
  });

  it('should render the component', () => {
    console.log('button', layout.findAllInRenderedTree('div'));
    expect(layout.length).toEqual(1);
  });
});
