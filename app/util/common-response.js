const HEADER_ACCEPT = 'accept';
const HEADER_VALUE_APPLICATION_JSON = 'application/json';

function acceptsJsonHeader(req) {
  try {
    return req.headers[HEADER_ACCEPT].includes(HEADER_VALUE_APPLICATION_JSON);
  } catch (err) {
    return false;
  }
}

function setResponseWithError(res, status, message, code = 'error') {
  return res.status(status).send({ code, message });
}

function setResponseWithOk(res, status, result, code = 200) {
  return res.status(status).send({ code, result });
}

function setResponseRaw(res, status, message) {
  return res.status(status).send(message);
}

function sendRedirect(res, status, urlRedirect) {
  return res.redirect(status, urlRedirect);
}

module.exports.acceptsJsonHeader = acceptsJsonHeader;
module.exports.setResponseWithError = setResponseWithError;
module.exports.setResponseWithOk = setResponseWithOk;
module.exports.setResponseRaw = setResponseRaw;
module.exports.sendRedirect = sendRedirect;
