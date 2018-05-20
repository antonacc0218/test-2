import types from './types';
import { combineReducers } from 'redux';

const userId = (state = null, action) => {
  const { type, userId } = action;
  switch (type) {
    case types.LOGIN_SUCCESS:
      return userId;
    case types.LOGOUT:
      return null;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  const { type, error } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return null;
    case types.LOGIN_FAILURE:
      return error;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return true;
    case types.LOGIN_FAILURE:
    case types.LOGIN_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  userId,
  loading,
  error  
});