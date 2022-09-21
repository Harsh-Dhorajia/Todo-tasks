const express = require('express');
const { createTodoController, todoListController, updateTodoController, deleteTodoController } = require('../controllers/todos');
const authMiddleware = require('../middlewares/authenticate');
const validation = require('../middlewares/validation');
const todoValidation = require('../utils/validations/todoValidation');

const router = express.Router();

router.route('/create').post(authMiddleware, validation(todoValidation.create), createTodoController);
router.route('/list').get(authMiddleware, todoListController);
router.route('/update/:todoId').patch(authMiddleware, validation(todoValidation.update), updateTodoController);
router.route('/delete/:todoId').delete(authMiddleware, deleteTodoController);

module.exports = router;
