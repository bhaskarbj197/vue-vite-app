import axios from 'axios';
import router from '../router';

//const API_URL = 'http://127.0.0.1:5000/api/v1/user/';
const API_URL = 'https://63b6610e58084a7af3b07cdf.mockapi.io/api/v1/user/';

class AuthService {
  async login(user) {
    console.log('user request: ', user);
    return axios
      .post(
        API_URL + 'login',
        {
          userid: user.username,
          password: user.password,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        if (response.data.jwt_token) {
          localStorage.setItem('user', JSON.stringify(response.data));
          // redirect to previous url or default to home page
          router.push('/');
        }

        return response.data;
      })
      .catch((err) => {
        console.log('AXIOS ERROR: ', err);
      });
  }

  logout() {
    localStorage.removeItem('user');
    router.push('/login');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}

export default new AuthService();
