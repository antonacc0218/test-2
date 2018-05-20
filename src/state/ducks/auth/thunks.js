import api from './api';
import types from './types';
import { globalErrorActions } from 'state/ducks/globalError';

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
        dispatch({ 
          type: types.LOGIN_FAILURE, 
          error: data.message === 'wrong_email_or_password' ? 
            'Неверная электронная почта или пароль' : data.message 
        })
      }      
    })
    .catch(error => {
      dispatch(globalErrorActions.addGlobalError(error.response.data))
    });
};

export default {
  login
};