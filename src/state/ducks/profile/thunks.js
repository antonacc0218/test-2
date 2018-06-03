import api from './api';
import types from './types';
import { globalErrorActions } from 'state/ducks/globalError';

function reorderSocials(socials) {
    let socialsSorted = [];
    socials.forEach((social, index) => {
        if (social.label === 'web') {
            const webSocial = socials.splice(index, 1);
            socialsSorted = [].concat(webSocial, socials);
        }
    });
    return socialsSorted;
}

const fetchProfileData = userId => dispatch => {
  dispatch({ type: types.LOAD_PROFILE_DATA_REQUEST });
  dispatch(globalErrorActions.removeGlobalError());
  return api.fetchProfileData(userId)
    .then(response => {
      const { status, data, message } = response.data;
      if (status === 'ok') {
        dispatch({
            type: types.LOAD_PROFILE_DATA_SUCCESS,
            profileData: {...data, social: reorderSocials(data.social)}
        });
      } else if (status === 'err') {
        dispatch(globalErrorActions.addGlobalError(message));
      }
    })
    .catch(error => dispatch(globalErrorActions.addGlobalError(error.response.data)));
};

export default {
  fetchProfileData
};