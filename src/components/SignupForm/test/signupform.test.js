import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
