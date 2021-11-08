const config = require('../config/index').config;
const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const fs = require('fs');
const path = require('path');

const getLoremUrl = () => {
  return `${config.service.url}`;
};

const getLoremData = async (qty) => {
  const loremUrl = getLoremUrl();
  try {
    const instance = axios.create({
      baseURL: `${loremUrl}/api?quantity=${qty || 1}`
    });
    const response = await instance.get();
    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      error.message = `Service error. ${error.message}`;
    }
    switch (error.response.status) {
      case 502: {
        const badGatewayError = {
          ...error,
          response: {
            data: {
              status_code: constants.BAD_GATEWAY,
              message: messages.BAD_GATEWAY
            }
          }
        };

        throw badGatewayError;
      }
      case 400: {
        const notFoundError = {
          ...error,
          response: {
            data: {
              status_code: constants.BAD_REQUEST_ERROR,
              message: messages.BAD_REQUEST_ERROR
            }
          }
        };

        throw notFoundError;
      }
      default:
        break;
    }

    throw error;
  }
};

const getLoremDataMock = async (qty) => {
  const rawdata = fs.readFileSync(path.resolve(__dirname, '../mock/response.json'));
  const loremData = JSON.parse(rawdata);
  const loremReturn = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [i, value] of loremData.entries()) {
    loremReturn.push(value);
    const loop = i + 1;
    if (loop === Number(qty)) {
      break;
    }
  }
  return loremReturn;
};

module.exports = {
  getLoremData,
  getLoremDataMock
};
