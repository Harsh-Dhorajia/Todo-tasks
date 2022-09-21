const TodoModel = require('../../models/Todo.model');

const todoList = async (req, res, next) => {
  try {
    const { user, query } = req;
    const { limit = 10, skip = 0 } = query;

    const todos = await TodoModel
      .find({ createdBy: user._id })
      .skip(skip)
      .limit(limit);

    const count = await TodoModel.countDocuments({ createdBy: user._id });

    const response = {
      data: todos,
      count,
    }
    return res.send(response);
  } catch (error) {
    console.log('error while todoList :>> ', error);
    res.status(500).send(error);
  }
}

module.exports = todoList;
