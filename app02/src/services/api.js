import axios from 'axios';

const git = axios.create({
  baseUrl: 'https://api.github.com/'
});

export default git;
