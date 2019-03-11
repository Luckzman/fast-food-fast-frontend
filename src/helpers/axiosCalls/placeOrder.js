import axios from 'axios';

const placeOrderCall = async (order) => {
  const response = await axios.post(
    'http://fastfoodfastapp2018.herokuapp.com/api/v1/orders',
    order
  );
  return response;
};

export default placeOrderCall;
