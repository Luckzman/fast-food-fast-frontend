import { toast } from 'react-toastify';
import placeOrderCall from '../../helpers/axiosCalls/placeOrder';
import actionTypes from './actionTypes';
import triggerLoading from '../authActions/loading';

const { ORDER_FAILURE, ORDER_LOADING, ORDER_SUCCESS } = actionTypes;

export const placeOrderSuccess = payload => ({
  type: ORDER_SUCCESS,
  payload
});

export const placeOrderFailure = payload => ({
  type: ORDER_FAILURE,
  payload
});

export const placeOrder = order => async (dispatch) => {
  try {
    dispatch(triggerLoading(ORDER_LOADING));
    const response = await placeOrderCall(order);
    dispatch(placeOrderSuccess(response));
    toast.success(response.data.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(placeOrderFailure(error.response));
      toast.error(error.response.data.data.message);
    }
  }
};
