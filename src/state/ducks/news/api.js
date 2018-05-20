import axios from 'axios';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

const api = {
  fetchNews() {
    return axios.get(URL);
  }
};

export default api;

