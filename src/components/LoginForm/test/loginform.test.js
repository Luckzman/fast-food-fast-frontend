import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
