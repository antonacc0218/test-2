import React from 'react';
import { render } from 'react-dom';
import configureStore from 'state/store';
import Root from 'view/components/Root';
import { authActions } from 'state/ducks/auth';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

const userId = localStorage.getItem('userId');

if (userId) {
  store.dispatch(authActions.loginSuccess(+userId));
}

render(
  <Root store={store}/>,
  document.getElementById('root')
);
