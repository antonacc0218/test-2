import axios from 'axios';
import API_URL from 'API_URL';

const api = {
  login(credentials) {
    return axios.post(`${API_URL}/validate`, credentials);
  }
};

export default api;