import React from 'react';
import { shallow } from 'enzyme';
import Catalog from '..';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Catalog />);
    expect(wrapper).toMatchSnapshot();
  });
});
