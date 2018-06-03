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

export default combineReducers({
  userId 
});