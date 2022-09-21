const TodoModel = require('../../models/Todo.model');

const createTodo = async (req, res, next) => {
  try {
    const { body: { title, description, dueDate }, user } = req;

    const createdTodo = await TodoModel.create({
      title,
      description,
      dueDate,
      createdBy: user._id,
    });

    return res.status(201).send(createdTodo);
  } catch (error) {
    console.log('error :>> ', error);
    res.status(500).send(error)
  }
}

module.exports = createTodo;
