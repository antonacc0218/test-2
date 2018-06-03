import types from './types';

const loginSuccess = userId => ({
  type: types.LOGIN_SUCCESS,
  userId
});

const loginFailure = globalError => ({
  type: types.LOGIN_FAILURE,
  globalError
});

const logout = () => {
  localStorage.removeItem('userId');
  return { type: types.LOGOUT };
};

export default {
  loginSuccess,
  loginFailure,
  logout
};