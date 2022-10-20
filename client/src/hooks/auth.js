import axios from 'axios';
import { setToken } from './utils';

export const handleLogin = async (userCredentials) => {
  await axios
    .post('http://localhost:8000/api/auth', userCredentials)
    .then((res) => {
      setToken(res.data.token);
    });
};
