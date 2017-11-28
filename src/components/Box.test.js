import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Box from './Box.js';

Enzyme.configure({adapter: new Adapter()});

describe('Box', () => {
  let box;
  beforeEach(() => {
    box = Enzyme.shallow(<Box text='test'/>);
  });

  it('should render the component', () => {
    expect(box.length).toEqual(1);
  });
  it('should display header from props', () => {
    expect(box.find('h3').text()).toBe('test');
  })
});
