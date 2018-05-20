import types from './types';

const globalError = (state = null, action) => {
  const { type, error } = action;
  switch (type) {
    case types.ADD_GLOBAL_ERROR:
      return error;
    case types.REMOVE_GLOBAL_ERROR:
      return null;
    default:
      return state;
  }
};

export default globalError;