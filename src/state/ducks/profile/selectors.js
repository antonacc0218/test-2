const getProfileData = state => state.profile.profileData;
const getLoading = state => state.profile.loading;
const getError = state => state.profile.error;

export default {
    getProfileData,
    getLoading,
    getError
};