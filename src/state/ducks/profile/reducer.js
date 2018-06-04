import types from './types';
import {combineReducers} from 'redux';

const profileData = (state = {}, action) => {
  const {type, profileData} = action;
  switch (type) {
    case types.FETCH_PROFILE_DATA_SUCCESS:
      return {...state, ...profileData};
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  const {type} = action;
  switch (type) {
    case types.FETCH_PROFILE_DATA_REQUEST:
      return true;
    case types.FETCH_PROFILE_DATA_FAILURE:
    case types.FETCH_PROFILE_DATA_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  profileData,
  loading
});