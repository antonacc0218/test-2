import axios from 'axios';

const URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

const api = {
  login(credentials) {
    return axios.post(URL, credentials);
  }
};

export default api;