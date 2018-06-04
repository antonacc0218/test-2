import types from './types';

const fetchProfileDataRequest = () => ({
  type: types.FETCH_PROFILE_DATA_REQUEST
});

const fetchProfileDataSuccess = profileData => ({
  type: types.FETCH_PROFILE_DATA_SUCCESS,
  profileData
});

const fetchProfileDataFailure = globalError => ({
  type: types.FETCH_PROFILE_DATA_FAILURE,
  globalError
});

export default {
  fetchProfileDataRequest,
  fetchProfileDataSuccess,
  fetchProfileDataFailure
}