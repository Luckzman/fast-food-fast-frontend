import React from 'react';
import { shallow } from 'enzyme';
import TopOrderContainer from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TopOrderContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
