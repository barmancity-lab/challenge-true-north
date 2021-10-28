const camelCase = require('lodash/camelCase');

function getMiddlewares(middlewareNames) {
  const arrayOfMiddleware = [];
  try {
    middlewareNames.forEach((name) => {
      const middleware = require(`./../middlewares/${name}`)[camelCase(name)]; // eslint-disable-line
      arrayOfMiddleware.push(middleware);
    });
    return arrayOfMiddleware;
  } catch (e) {
    throw e;
  }
}

module.exports.getMiddlewares = getMiddlewares;
