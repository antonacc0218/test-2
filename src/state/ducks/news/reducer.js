import types from './types';
import { combineReducers } from 'redux';
import { indexBy, prop, keys, filter } from 'ramda';

const byIds = (state = {}, action) => {
  const { type, news } = action;
  switch (type) {
    case types.FETCH_NEWS_SUCCESS:
      return {...state, ...indexBy(prop('id'), news)};
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  const { type, news } = action;
  switch (type) {
    case types.FETCH_NEWS_SUCCESS:
      const isPresent = id => !state.includes(id);
      const newIds = filter(isPresent, keys(indexBy(prop('id'), news)));
      return [...state, ...newIds];
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case types.FETCH_NEWS_REQUEST:
      return true;
    case types.FETCH_NEWS_SUCCESS:
    case types.FETCH_NEWS_FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  byIds,
  allIds,
  loading
});
