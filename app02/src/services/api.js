import axios from 'axios';

const git = axios.create({
  BaseURL: 'https://api.github.com/'
});

export default git;
