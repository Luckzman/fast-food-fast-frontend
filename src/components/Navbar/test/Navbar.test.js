import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
