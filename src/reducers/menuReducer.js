import actionTypes from '../actions/menuItem/actionTypes';
import initialState from './initialState';

const { GET_MENU_LOADING, GET_MENU_SUCCESS, GET_MENU_FAILURE } = actionTypes;

const { menu } = initialState;

export default (state = menu, action) => {
  switch (action.type) {
    case GET_MENU_LOADING:
      return {
        ...state,
        menuIsLoading: true
      };
    case GET_MENU_SUCCESS:
      return {
        menuIsLoading: false,
        success: true,
        response: action.payload
      };
    case GET_MENU_FAILURE:
      return {
        authIsLoading: false,
        success: false,
        response: action.payload.data.message
      };
    default:
      return state;
  }
};
