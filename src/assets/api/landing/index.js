import axios from 'axios';

export const apiTest = () => {
  console.log('api testing...');
  return axios.get('/api/test');
};

export const createTestUser = data => axios({
  method: 'post',
  url: '/api/create-user',
  data: {
    name: data.name,
    countersign: data.countersign,
  },
});

export default {
  apiTest,
  createTestUser,
  logSomething,
};
