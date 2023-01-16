import axios from 'axios';
import authHeader from '../util/auth-header';

const API_URL = 'https://63b6610e58084a7af3b07cdf.mockapi.io/api/v1/user/';

class EmployeeService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'employees');
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new EmployeeService();
