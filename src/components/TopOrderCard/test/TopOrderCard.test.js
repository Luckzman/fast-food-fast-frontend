import React from 'react';
import { shallow } from 'enzyme';
import TopOrderCard from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TopOrderCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
