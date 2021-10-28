const express = require('express');

const { getMiddlewares } = require('../util/get-middleware');
const context = require('../config').context;

const router = express.Router();
const controller = require('../controllers/task-controller');

/* GET users listing. */
router.get('/task', getMiddlewares(context.middlewares.getTask), controller.get);
router.put('/task', getMiddlewares(context.middlewares.putTask), controller.put);


module.exports = router;
