import React from 'react';
import { shallow } from 'enzyme';
import FormTab from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<FormTab />);
    expect(wrapper).toMatchSnapshot();
  });
});
