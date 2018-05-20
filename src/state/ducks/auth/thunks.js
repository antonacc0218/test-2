import api from './api';
import types from './types';

const login = credentials => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST });
  return api.login(credentials)
    .then(response => {
      const data = response.data;
      if (data.status === 'ok') {
        const userId = data.data.id;
        localStorage.setItem('userId', userId);
        dispatch({ type: types.LOGIN_SUCCESS, userId });
      } else if (data.status === 'err') {
        dispatch({ type: types.LOGIN_FAILURE, error: data.message });
      }      
    })
    .catch(error => {
      console.error(error);
    });
};

export default {
  login
};