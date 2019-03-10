import axios from 'axios';
// import { API_BASE_URL } from '../../constants';

const signupCall = async (user) => {
  const response = await axios.post(
    'http://fastfoodfastapp2018.herokuapp.com/api/v1/auth/signup',
    user
  );
  return response;
};

const loginCall = async (user) => {
  const response = await axios.post(
    'http://fastfoodfastapp2018.herokuapp.com/api/v1/auth/login',
    user
  );
  return response;
};

export { signupCall, loginCall };
