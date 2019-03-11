import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MenuItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
