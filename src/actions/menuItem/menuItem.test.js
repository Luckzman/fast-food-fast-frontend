/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '.';
import actionTypes from './actionTypes';
import * as axios from '../../helpers/axiosCalls/getMenu';
import { payload, mockResponse } from '../../mockData/index';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('menuItem actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.GET_MENU_SUCCESS} is fired`, () => {
    expect(actions.getMenuSuccess(payload)).toEqual({
      type: actionTypes.GET_MENU_SUCCESS,
      payload
    });
  });

  it(`should return an action object once ${actionTypes.GET_MENU_FAILURE} is fired`, () => {
    expect(actions.getMenuFailure(payload)).toEqual({
      type: actionTypes.GET_MENU_FAILURE,
      payload
    });
  });

  it('should call the get Menu start dispatch function', () => {
    axios.getMenuCall = jest.fn().mockResolvedValue(mockResponse);
    actions.getMenu(payload)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.GET_MENU_LOADING });
  });
});
