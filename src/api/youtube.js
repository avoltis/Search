import axios from 'axios';

const KEY = 'AIzaSyAfK5IhPmRft73e8LXkadSUhYKHy-8Qffg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
