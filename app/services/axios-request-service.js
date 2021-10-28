const axios = require('axios');

const buildResponse = (response) => {
  if (response.data) {
    return response.data;
  }
  return response;
};

const get = async (options, url) => {
  const instance = axios.create(options);
  const response = await instance.get(url);
  return buildResponse(response);
};

const post = async (options, data, url) => {
  const instance = axios.create(options);
  const response = await instance.post(url, data);
  return buildResponse(response);
};

module.exports = {
  get,
  post
};
