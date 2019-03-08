import React from 'react';
import { shallow } from 'enzyme';
import Banner from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toMatchSnapshot();
  });
});
