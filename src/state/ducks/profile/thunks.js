import api from './api';
import actions from './actions';
import errorTypes from 'errorTypes';

function reorderSocials(socials) {
  let socialsSorted = [...socials];
  let webSocial = null;
  socialsSorted.forEach((social, index) => {
    if (social.label === 'web') {
      webSocial = socialsSorted.splice(index, 1)[0];
    }
  });
  if (webSocial) {
    socialsSorted.unshift(webSocial);
    return socialsSorted;
  }
  return socialsSorted;
}

const fetchProfileData = userId => dispatch => {
  dispatch(actions.fetchProfileDataRequest());
  return api.fetchProfileData(userId)
      .then(response => {
        console.log(response);
        const {status, data} = response.data;
        if (status === 'ok') {
          const profileData = {...data, social: reorderSocials(data.social)};
          dispatch(actions.fetchProfileDataSuccess(profileData));
        } else if (status === 'err') {
          dispatch(actions.fetchProfileDataFailure(errorTypes.server_error));
        }
      })
      .catch(error => {
        const globalError = error.response.data || errorTypes.server_error;
        dispatch(actions.fetchProfileDataFailure(globalError));
      });
};

export default {
  fetchProfileData
};