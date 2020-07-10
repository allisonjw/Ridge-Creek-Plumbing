import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});