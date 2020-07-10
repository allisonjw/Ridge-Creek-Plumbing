import React from 'react';
import Services from './Services';
import { shallow } from 'enzyme';

describe('Services', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Services />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});