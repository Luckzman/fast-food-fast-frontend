import axios from 'axios';

const getMenuCall = async () => {
  const response = await axios.get('http://fastfoodfastapp2018.herokuapp.com/api/v1/menu');
  return response;
};

export default getMenuCall;
