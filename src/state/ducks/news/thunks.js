import api from './api';
import types from './types';
import { globalErrorActions } from 'state/ducks/globalError';
import { values } from 'ramda';

const fetchNews = () => (dispatch, getState) => {
  const newsAmount = getState().news.allIds.length;
  if (newsAmount === 2) {
    return dispatch({ 
      type: types.FETCH_NEWS_SUCCESS, 
      news: values(getState().news.byIds) 
    });
  }
  dispatch({ type: types.FETCH_NEWS_REQUEST });
  return api.fetchNews()
    .then(response => {
      const { status, data } = response.data;
      if (status === 'ok') {
        dispatch(globalErrorActions.removeGlobalError());
        dispatch({ type: types.FETCH_NEWS_SUCCESS, news: data });
      }
    })
    .catch(error => {
      dispatch({ type: types.FETCH_NEWS_FAILURE });
      dispatch(globalErrorActions.addGlobalError(error.response.data));
    });
}

export default {
  fetchNews
};

