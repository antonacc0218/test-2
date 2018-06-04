import api from './api';
import actions from './actions';
import errorTypes from 'errorTypes';
import { SubmissionError, change } from 'redux-form';

function AuthError(message) {
  this.name = 'AuthError';
  this.message = message;
  this.stack = (new Error()).stack;
}

AuthError.prototype = Object.create(Error.prototype);

const login = credentials => dispatch => {
  return api.login(credentials)
    .then(response => {
      const { data: { data: { id, message } } } = response;
      if (id) {
        localStorage.setItem('userId', id);
        dispatch(actions.loginSuccess(id));
      } else {
        dispatch(change('loginForm', 'password', ''));
        throw new AuthError(errorTypes[message]);
      }      
    })
    .catch(error => {
      if (error instanceof AuthError) {
        throw new SubmissionError({
          _error: error.message
        });
      } else {
        dispatch(actions.loginFailure(errorTypes.server_error));
      }
    });
};

export default {
  login
};