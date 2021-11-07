/* eslint-disable no-await-in-loop */
const taskRepository = require('../repositories/task-repository');
const messages = require('../constants/messages');


const connectDb = async (data) => {
  const msj = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const value of data) {
    const task = await taskRepository.getByuuId(value.uuid);
    if (task) {
      if (!task.dataValues.done) {
        msj.push({ uuid: value.uuid, msj: messages.DONE });
        await taskRepository.update(value.uuid, { done: 1 });
      } else {
        msj.push({ uuid: value.uuid, msj: messages.ALREADY_EXIST });
      }
    } else {
      msj.push({ uuid: value.uuid, msj: messages.NOT_FOUND_IN_DB });
    }
  }
  return msj;
};

const buildTask = async (loremData) => {
  try {
    const arr = [];
    // eslint-disable-next-line
    loremData.forEach(title => {
      const uuid = Math.floor(Math.random() * 100);
      taskRepository.create({ title, uuid });
      const obj = { uuid, title };
      arr.push(obj);
    });
    return arr;
  } catch (error) {
    throw error.message;
  }
};
const markAsDone = async (data) => {
  try {
    const conn = await connectDb(data);
    return conn;
  } catch (e) {
    throw e.message;
  }
};


module.exports = {
  buildTask,
  markAsDone
};
