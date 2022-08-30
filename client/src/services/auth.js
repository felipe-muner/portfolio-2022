import axios from 'axios';

const auth = {
  getUsers: () => axios.get('https://jsonplaceholder.typicode.com/users'),
};

export default auth;
