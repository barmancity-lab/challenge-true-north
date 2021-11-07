const config = require('../config/index').config;
const axios = require('axios');
const constants = require('../constants/constants');
const messages = require('../constants/messages');

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
    /*
    logger.info({
      module: 'bff-user-profile',
      method: 'getBankData',
      description: `Trying to get bank data from bank service. Url ${bankUrl}/banks`
    });
    */
    return response.data;
  } catch (error) {
    /*
    logger.error({
      module: 'bff-user-profile',
      method: 'getBankData',
      description: `Error getting the bank data from bank service. ${error.message}. URL: ${bankUrl}`,
    });
    */
    if (error.code === 'ECONNABORTED') {
      error.message = `Authentication Service error. ${error.message}`;
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
module.exports = {
  getLoremData
};
