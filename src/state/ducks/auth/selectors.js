const getUserId = state => state.auth.userId;
const getLoading = state => state.auth.loading;
const getError = state => state.auth.error;

export default {
    getUserId,
    getLoading,
    getError
};