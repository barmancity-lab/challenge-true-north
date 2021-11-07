const Task = require('../models/index').task;

module.exports = {
  getByuuId: async (uuid) => {
    const task = await Task.findOne({ where: { uuid } });
    return task;
  },
  getAll: async () => {
    const tasks = await Task.findAll();
    return tasks;
  },
  create: async (data) => {
    const task = Task.create(data);
    return task;
  },
  update: async (uuid, data) => {
    const task = await Task.findOne({ where: { uuid } });
    await task.update(data);
    return task;
  },
  destroy: async (id) => {
    const task = await Task.findOne({ where: { id } });
    await task.destroy();
    return task;
  }
};
