const TodoModel = require('../../models/Todo.model');

const deleteTodo = async (req, res, next) => {
  try {
    const { params, user } = req;

    if (!params.todoId) {
      return res.status(400).send({ message: 'Invalid Input' });
    }

    const todo = await TodoModel.findById(params.todoId)

    if (!todo) {
      return res.status(404).send({
        message: 'Todo Not Found',
      });
    }

    const updatedTodo = await TodoModel.findByIdAndDelete(todo.id);
    return res.status(200).send({ message: 'Todo Deleted successfully' });
  } catch (error) {
    console.log('Error while TodoUpdate', error);
    return res.status(500).send(error);
  }
}

module.exports = deleteTodo;
