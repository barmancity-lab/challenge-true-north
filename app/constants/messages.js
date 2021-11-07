
const RESPONSE_OK = 'OK';
const RESPONSE_OK_NO_CONTENT = 'no content';
const NOT_FOUND_ERROR = 'Not Found';
const INTERNAL_ERROR = 'Internal server error';
const FORBIDDEN = 'Forbiden';
const RESPONSE_OK_CREATED = 'created';
const BAD_GATEWAY = 'Bad gateway';
const BAD_REQUEST_ERROR = 'Bad request';
const DONE = 'have been marked as done';
const ALREADY_EXIST = 'have`t been marked as done because already marked before';
const NOT_FOUND_IN_DB = 'have`t been marked as done because does`t exist in db';

module.exports = {
  NOT_FOUND_ERROR,
  FORBIDDEN,
  BAD_REQUEST_ERROR,
  INTERNAL_ERROR,
  RESPONSE_OK,
  RESPONSE_OK_NO_CONTENT,
  RESPONSE_OK_CREATED,
  BAD_GATEWAY,
  DONE,
  ALREADY_EXIST,
  NOT_FOUND_IN_DB
};
