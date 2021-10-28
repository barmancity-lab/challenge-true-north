module.exports = {
  middlewares: {
    getTask: process.env.NODE_CONTEXT_MIDDLEWARES_GET_TASK || [
      'validate-task-middleware'
    ],
    putTask: process.env.NODE_CONTEXT_MIDDLEWARES_PUT_TASK || [
      'validate-task-middleware'
    ]
  }
};
