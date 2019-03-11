import actionTypes from './actionTypes';
import getMenuCall from '../../helpers/axiosCalls/getMenu';
import triggerLoading from '../authActions/loading';

const { GET_MENU_LOADING, GET_MENU_FAILURE, GET_MENU_SUCCESS } = actionTypes;

const getMenuSuccess = payload => ({
  type: GET_MENU_SUCCESS,
  payload
});

const getMenuFailure = payload => ({
  type: GET_MENU_FAILURE,
  payload
});

const getMenu = () => async (dispatch) => {
  try {
    dispatch(triggerLoading(GET_MENU_LOADING));
    const response = await getMenuCall();
    dispatch(getMenuSuccess(response));
  } catch (error) {
    dispatch(getMenuFailure(error.response));
  }
};

export { getMenuSuccess, getMenuFailure, getMenu };
