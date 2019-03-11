import actionTypes from '../actions/orderActions/actionTypes';
import initialState from './initialState';

const { ORDER_LOADING, ORDER_SUCCESS, ORDER_FAILURE } = actionTypes;

const { menu } = initialState;

export default (state = menu, action) => {
  switch (action.type) {
    case ORDER_LOADING:
      return {
        ...state,
        orderIsLoading: true
      };
    case ORDER_SUCCESS:
      return {
        orderIsLoading: false,
        success: true,
        response: action.payload
      };
    case ORDER_FAILURE:
      return {
        orderIsLoading: false,
        success: false,
        response: action.payload.data.message
      };
    default:
      return state;
  }
};
