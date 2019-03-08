import React from 'react';
import { shallow } from 'enzyme';
import TopOrder from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TopOrder />);
    expect(wrapper).toMatchSnapshot();
  });
});
