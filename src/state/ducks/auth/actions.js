import types from './types';

const loginSuccess = userId => ({
  type: types.LOGIN_SUCCESS,
  userId
});

const logout = () => {
  localStorage.removeItem('userId');
  return { type: types.LOGOUT };
};

export default {
  loginSuccess,
  logout
};