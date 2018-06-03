import axios from 'axios';
import API_URL from 'API_URL';

const api = {
  fetchNews() {
    return axios.get(`${API_URL}/news`);
  }
};

export default api;

