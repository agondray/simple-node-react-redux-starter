import axios from 'axios';

export const apiTest = () => {
  console.log('api testing...');
  return axios.get(`/api/test`);
}
