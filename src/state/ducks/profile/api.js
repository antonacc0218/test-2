import axios from 'axios';
import API_URL from 'API_URL';

const api = {
  fetchProfileData(userId) {
    return axios.get(`${API_URL}/user-info/${userId}`);
  }
};

export default api;