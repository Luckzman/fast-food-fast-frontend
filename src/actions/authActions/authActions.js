import { toast } from 'react-toastify';
import { signupCall, loginCall } from '../../helpers/axiosCalls/auth';
import { setToken } from '../../helpers/jwt';
import actionTypes from './actionTypes';
import triggerLoading from './loading';

const { AUTH_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } = actionTypes;

export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});

export const signUpFailure = payload => ({
  type: SIGNUP_FAILURE,
  payload
});

export const userSignUp = user => async (dispatch) => {
  try {
    dispatch(triggerLoading(AUTH_LOADING));
    const response = await signupCall(user);
    dispatch(signUpSuccess(response));
    toast.success(response.data.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(signUpFailure(error.response));
      toast.error(error.response.data.data.message);
    }
  }
};

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
});

export const userLogin = user => async (dispatch) => {
  try {
    dispatch(triggerLoading(AUTH_LOADING));
    const response = await loginCall(user);
    setToken(response.data.data.token);
    dispatch(loginSuccess(response));
    toast.success(response.data.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(loginFailure(error.response));
      toast.error(error.response.data.data.message);
    }
  }
};
