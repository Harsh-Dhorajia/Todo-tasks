const TodoModel = require('../../models/Todo.model');

const updateTodo = async (req, res, next) => {
  try {
    const { body, params, user } = req;

    console.log(params.todoId);
    if (!params.todoId) {
      return res.status(400).send({ message: 'Invalid Input' });
    }

    const todo = await TodoModel.findById(params.todoId)

    if (!todo) {
      return res.status(404).send({
        message: 'Todo Not Found',
      });
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(todo.id, {
      $set: {
        ...body
      }
    });
    return res.status(200).send(updatedTodo);
  } catch (error) {
    console.log('Error while TodoUpdate', error);
    return res.status(500).send(error);
  }
}

module.exports = updateTodo;
