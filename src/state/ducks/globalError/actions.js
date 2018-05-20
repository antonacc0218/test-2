import types from './types';

const addGlobalError = error => ({
  type: types.ADD_GLOBAL_ERROR,
  error
});

const removeGlobalError = () => ({
  type: types.REMOVE_GLOBAL_ERROR
});

export default {
  addGlobalError,
  removeGlobalError
};