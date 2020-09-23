import {
  API_REQUEST,
  API_RECEIVE_SUCCESS,
  API_RECEIVE_FAILURE,
} from '../action/apiProductsAction';
import { ADD_QUANTITY } from '../action/plusMinusActions';

const INITIAL_STATE = {
  data: [],
  loading: true,
};

const apiProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_RECEIVE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        loading: false,
      };
    case API_RECEIVE_FAILURE:
      return {
        ...state,
        error: action.errorMessage,
        loading: false,
      };
    case ADD_QUANTITY:
      return {
        ...state,
        data: [...action.newProductArr],
      };
    default:
      return state;
  }
};

export default apiProductsReducer;