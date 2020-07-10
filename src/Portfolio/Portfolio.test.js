import React from 'react';
import Portfolio from './Portfolio';
import { shallow } from 'enzyme';

describe('Portfolio', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Portfolio />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});