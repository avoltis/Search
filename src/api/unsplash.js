import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 9797f7eadb370d1676b63ac6a4f85d4e088e3b4996c98e4c56a53b3ba49f58f9'
  }
});
