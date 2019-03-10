import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Login } from '..';

describe('App', () => {
  const props = {
    login: () => {}
  };
  it('should match snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should stimulate on submit event', () => {
    const wrapper = shallow(<Login {...props} />);
    wrapper.find('Form').simulate('submit', {
      preventDefault: jest.fn()
    });
    wrapper.update();
    expect(wrapper.find('Form')).toBeDefined();
  });

  it('should change the state after changing the article title', () => {
    const event = { target: { name: 'email' } };
    const wrapper = shallow(<Login />);
    const handleChangeSpy = sinon.spy(wrapper.instance(), 'handleChange');
    wrapper.update();
    wrapper.find('#email').simulate('change', event);
    expect(handleChangeSpy.calledOnce).toBeDefined();
  });
});
