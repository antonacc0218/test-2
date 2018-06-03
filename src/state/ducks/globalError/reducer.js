import types from './types';

const globalError = (state = null, action) => {
  const { type, globalError } = action;
  if (type === types.RESET_GLOBAL_ERROR) {
    return null;
  } else if (globalError) {
    return globalError;
  }
  return state;
};

export default globalError;