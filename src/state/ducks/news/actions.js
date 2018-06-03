import types from './types';

const fetchNewsRequest = () => ({
  type: types.FETCH_NEWS_REQUEST
});

const fetchNewsSuccess = news => ({
  type: types.FETCH_NEWS_SUCCESS,
  news
});

const fetchNewsFailure = globalError => ({
  type: types.FETCH_NEWS_FAILURE,
  globalError
});

export default {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure
};