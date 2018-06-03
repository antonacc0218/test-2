import api from './api';
import actions from './actions';
import { values } from 'ramda';
import errorTypes from "errorTypes";

const fetchNews = () => (dispatch, getState) => {
  const newsAmount = getState().news.allIds.length;
  if (newsAmount === 2) {
    return dispatch(actions.fetchNewsSuccess(values(getState().news.byIds)));
  }
  dispatch(actions.fetchNewsRequest());
  return api.fetchNews()
    .then(response => {
      const { status, data } = response.data;
      if (status === 'ok') {
        dispatch(actions.fetchNewsSuccess(data));
      } else {
        dispatch(actions.fetchNewsFailure(errorTypes.server_error));
      }
    })
    .catch(() => {
      dispatch(actions.fetchNewsFailure(errorTypes.server_error));
    });
}

export default {
  fetchNews
};

