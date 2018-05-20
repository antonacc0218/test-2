import axios from 'axios';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/';

const api = {
    fetchProfileData(userId) {
        return axios.get(`${URL}${userId}`);
    }
};

export default api;