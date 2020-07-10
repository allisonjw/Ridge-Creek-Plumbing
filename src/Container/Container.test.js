import React from 'react';
import { render } from '@testing-library/react';
import Container from './Container';
import { shallow } from 'enzyme';

describe('Container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});