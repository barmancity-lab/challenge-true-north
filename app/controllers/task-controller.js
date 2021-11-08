/* eslint-disable dot-notation */
const { getLoremData, getLoremDataMock } = require('../services/lorem-service');
const { setResponseWithOk, setResponseWithError } = require('../util/common-response');
const { buildTask, markAsDone } = require('../services/task-processor');
const config = require('../config/index').config;


const get = async (req, res) => {
  try {
    // eslint-disable-next-line max-len
    const loremData = config.service.url ? await getLoremData(req.query.qty) : await getLoremDataMock(req.query.qty);
    const tasks = await buildTask(loremData);
    return setResponseWithOk(res, 200, tasks);
  } catch (e) {
    return setResponseWithError(res, 500, e.message);
  }
};

const put = async (req, res) => {
  try {
    const data = req.body;
    const tasks = await markAsDone(data);
    return setResponseWithOk(res, 200, tasks);
  } catch (e) {
    return setResponseWithError(res, 500, e.message);
  }
};

module.exports = {
  get,
  put
};
